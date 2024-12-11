import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ArtistsDocument = HydratedDocument<Artists>;
@Schema()
export class Artists {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  grammy: boolean;
}
export const ArtistsSchema = SchemaFactory.createForClass(Artists);
