import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { USER_TYPE } from 'src/constant';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
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
}

export const UserSchema = SchemaFactory.createForClass(User);
