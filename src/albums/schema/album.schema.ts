import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
export type AlbumsDocument = HydratedDocument<Albums>;
@Schema()
export class Albums {
  @Prop({ required: true })
  title: string;
  @Prop({ type: Types.ObjectId, ref: 'Artists', required: true })
  artist: Types.ObjectId;
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Tracks' }], required: true })
  tracks: Types.ObjectId[];
}
export const AlbumsSchema = SchemaFactory.createForClass(Albums);
