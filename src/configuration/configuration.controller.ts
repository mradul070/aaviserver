import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ConfigurationService } from "./configuration.service";

@ApiTags('configuration')
@Controller('configurations')
export class ConfigurationController {
    constructor(
        private readonly configurationService: ConfigurationService
    ) {}
    @Get()
    async getConfiguration(@Query('key') key: string) {
        return this.configurationService.getConfiguration(key)
    }
}