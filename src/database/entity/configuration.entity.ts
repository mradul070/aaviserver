import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ConfigurationDocument = HydratedDocument<Configuration>;

@Schema()
export class Configuration {
    @Prop({required: true})
    key: string

    @Prop({required: true})
    value: string
}

export const configurationSchema = SchemaFactory.createForClass(Configuration);
