import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Address, AddressSchema } from "src/database/entity/address.entity";
import { AddressController } from "./address.controller";
import { AddressService } from "./address.service";

@Module({
    providers: [AddressService],
    controllers: [AddressController],
    imports: [ MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }])],
})

export class AddressModule {}