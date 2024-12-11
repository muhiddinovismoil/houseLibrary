import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
export type TracksDocument = HydratedDocument<Tracks>;
@Schema()
export class Tracks {
  @Prop({ required: true })
  title: string;
  @Prop({ type: Types.ObjectId, ref: 'Artists', required: true })
  artist: Types.ObjectId;
  @Prop({ required: true })
  duration: number;
}
export const TracksSchema = SchemaFactory.createForClass(Tracks);
