import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose/dist/mongoose.module";
import { Configuration, configurationSchema } from "src/database/entity/configuration.entity";
import { ConfigurationController } from "./configuration.controller";
import { ConfigurationService } from "./configuration.service";

@Module({
    providers: [ConfigurationService],
    controllers: [ConfigurationController],
    imports: [ MongooseModule.forFeature([{ name: Configuration.name, schema: configurationSchema }])],
})

export class ConfigurationModule {}