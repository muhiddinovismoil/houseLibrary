import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesController } from './favourites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesSchema } from './schema/favourite.schema';
import { FavouriteRepository } from './repository/favourites.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'favorite', schema: FavoritesSchema }]),
  ],
  controllers: [FavouritesController],
  providers: [FavouriteRepository, FavouritesService],
})
export class FavouritesModule {}
