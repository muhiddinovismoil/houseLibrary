import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesController } from './favourites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesSchema } from './schema/favourite.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'favorite', schema: FavoritesSchema }]),
  ],
  controllers: [FavouritesController],
  providers: [FavouritesService],
})
export class FavouritesModule {}
