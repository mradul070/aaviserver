import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, ValidateIf } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { USER_TYPE } from 'src/constant';
import { ObjectID, ObjectIdColumn } from 'typeorm';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
  @ObjectIdColumn({primary: true})
  id: ObjectID;

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  password: string;

  @Prop({required: true})
  mobileNumber: string;

  @Prop({required: true, enum: USER_TYPE, default: USER_TYPE.USER})
  userType: string;

  @Prop({default: true})
  isActive: boolean

  @Prop()
  @ValidateIf(o => o.userType === USER_TYPE.BUSINESS)
  @IsNotEmpty()
  partyName: string

  @Prop()
  @ValidateIf(o => o.userType === USER_TYPE.BUSINESS)
  @IsNotEmpty()
  gstin: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
