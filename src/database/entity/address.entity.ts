import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { USER_TYPE } from 'src/constant';
import { User } from './user.entity';

export type AddressDocument = HydratedDocument<Address>;

@Schema({timestamps: true})
export class Address {
  
  @Prop({required: true , type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user:  Types.ObjectId

  @Prop({required: true})
  line1: string;

  @Prop()
  line2: string;

  @Prop()
  line3: string;

  @Prop({required: true})
  city: string;

  @Prop({required: true})
  state: string;

  @Prop({required: true})
  country: string

  @Prop({required: true})
  zipCode: number

  @Prop({required: true, default: false})
  isPrimary: boolean
}

export const AddressSchema = SchemaFactory.createForClass(Address);
