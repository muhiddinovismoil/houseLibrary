import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { FavouritesModule } from './favourites/favourites.module';
import { AlbumsModule } from './albums/albums.module';
import { TracksModule } from './tracks/tracks.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/homeLibrary`),
    ArtistsModule,
    FavouritesModule,
    AlbumsModule,
    TracksModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
