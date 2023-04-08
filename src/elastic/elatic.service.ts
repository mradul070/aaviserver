import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { User } from "src/database/entity/user.entity";

@Injectable()
export class ElasticSearchService {
    constructor(private readonly elasticSearchService: ElasticsearchService) {}
    async createUserIndex() {
        const checkIndex = await this.elasticSearchService.indices.exists({ index: 'users' });
        if (!checkIndex) {
            await this.elasticSearchService.indices.create({
                index: 'users',
                settings: {
                    analysis: {
                        analyzer: {
                            autocomplete_analyzer: {
                                type: "custom",
                                tokenizer: 'autocomplete',
                                filter: ['lowercase'],
                            },
                            autocomplete_search_analyzer: {
                                type: "custom",
                                tokenizer: 'keyword',
                                filter: ['lowercase'],
                            },
                        },
                        tokenizer: {
                            autocomplete: {
                                type: 'edge_ngram',
                                min_gram: 1,
                                max_gram: 30,
                                token_chars: ['letter', 'digit', 'whitespace'],
                            },
                        },
                    },
                },
                mappings: {
                    properties: {
                        partyName: {
                            type: 'text',
                            fields: {
                                complete: {
                                    type: 'text',
                                    analyzer: 'autocomplete_analyzer',
                                    search_analyzer: 'autocomplete_search_analyzer',
                                },
                            },
                        },
                        email: { type: 'text' },
                        id: { type: 'text' },
                    }
                }
            })
        }
    }
    async saveUser(user: User) {
        let body: any = {
            id: user.id,
            email: user.email
        }
        if (user.partyName) body.partyName = user.partyName
        return this.elasticSearchService.index({
            index: 'users',
            id: user.id.toString(),
            body: body
        }).then(response => {
            return response;
        }).catch(error => {
            console.log(error)
            throw new InternalServerErrorException('Elasticsearch Error');
        });
    }

    async findUsers(searchWord: string) {
        let results = [];
        const { hits } = await this.elasticSearchService.search({
            index: 'users',
            query: {
                match: {
                    'partyName.complete': {
                        query: searchWord
                    }
                }
            }
        })
        console.log(hits)
        const hit = hits.hits;
        console.log(hit)
        hit.map((item: any) => {
            console.log(item)
            results.push({
                partyName: item._source.partyName,
                id: item._source.id
            });
        });
        return results
    }
    async findUser(searchKeyword) {
        return this.elasticSearchService.search({
            index: 'users',
            _source: false,
            query: {
                bool: {
                    must: [{
                        wildcard: {
                            partyName: {
                                value: `*${searchKeyword}*`
                            }
                        }
                    }],
                    filter: [],
                    should: [],
                    must_not: []
                }
            },
            aggs: {
                auto_complete: {
                    terms: {
                        field: "partyName.keyword",
                        order: {
                            _count: "desc"
                        },
                        size: 10
                    }
                }
            },
            fields: ["partyName", "id"],
            size: 3
        })
    }
}

