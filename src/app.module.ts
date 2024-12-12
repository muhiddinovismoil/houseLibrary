import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { FavouritesModule } from './favourites/favourites.module';
import { AlbumsModule } from './albums/albums.module';
import { TracksModule } from './tracks/tracks.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ArtistsModule,
    FavouritesModule,
    AlbumsModule,
    TracksModule,
    UsersModule,
  ],
})
export class AppModule {}
