import { Body, Controller, Injectable, Post, UseGuards, Request } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { AddressService } from "./address.service";
import { CreateAddressDto } from "./dto/create-address.dto";

@Injectable()
@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService) {}
    @UseGuards(JwtAuthGuard)
    @Post()
    async createAddress(@Body() body: CreateAddressDto, @Request() req) {
        return this.addressService.createAddress(body, req.user)        
    }
}