import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
export const BusinessSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  address_id: { type: Schema.Types.ObjectId },
  line3: { type: String },
  city: {type: String, required: true},
  state: { type: String, required: true,},
  country: {type: String, required: true},
  zipCode: {type: String, required: true}
}, {timestamps: true});

export interface Address {
  _id: string;
  line1: string;
  line2: string;
  line3: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt: string;
  updatedAt: string;
}
