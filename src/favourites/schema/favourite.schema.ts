import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Types } from 'mongoose';

export type FavoritesDocument = HydratedDocument<Favorites>;

@Schema()
export class Favorites {
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Artists' }], required: true })
  artists: Types.ObjectId[];

  @Prop({ type: [String], required: true })
  albums: string[];

  @Prop({ type: [String], required: true })
  tracks: string[];
}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites);
