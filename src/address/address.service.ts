import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { userInfo } from "os";
import { Address, AddressDocument } from "src/database/entity/address.entity";
import { CreateAddressDto } from "./dto/create-address.dto";

@Injectable()
export class AddressService {
    constructor(
        @InjectModel(Address.name)
        private readonly addressModel: Model<AddressDocument>,    
    ) {}
    async createAddress(body: CreateAddressDto, user) {
        let address = new Address();
        address = {...body, user: new mongoose.Types.ObjectId(user.userId)}
        await this.addressModel.create(address) 
        return this.addressModel.find().populate('user').exec()
    }
}