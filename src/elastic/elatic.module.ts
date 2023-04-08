import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { OmitType } from '@nestjs/swagger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElasticSearchService } from './elatic.service';
@Module({
    imports: [
        ElasticsearchModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                node: 'http://elasticsearch:9200', // configService.get('ELASTICSEARCH_NODE'),
                auth: {
                    username: 'elastic', // configService.get('ELASTICSEARCH_USERNAME'),
                    password: 'aavi' // configService.get('ELASTICSEARCH_PASSWORD')
                }
            }),
            inject: [ConfigService],
            
        })
    ],
    exports: [ElasticSearchService],
    providers: [
        ElasticSearchService
    ]
})


export class ElasticSearchModule implements OnModuleInit  {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}
    async onModuleInit() {
        this.elasticSearchService.createUserIndex().then();
    }
}
