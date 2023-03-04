import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CONFIGURATION } from "src/constant";
import { Configuration, ConfigurationDocument } from "src/database/entity/configuration.entity";

export class ConfigurationService {
    constructor(
        @InjectModel(Configuration.name)
        private readonly configurationModel: Model<ConfigurationDocument>,    

    ) {}
    async getConfiguration(key: string) {
        return await this.configurationModel.find({
            key: CONFIGURATION.KEY
        })
    }
}