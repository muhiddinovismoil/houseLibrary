import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsSchema } from './schema/artist.schema';
import { ArtistsRepository } from './repository/artists.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'artists', schema: ArtistsSchema }]),
  ],
  controllers: [ArtistsController],
  providers: [ArtistsRepository, ArtistsService],
})
export class ArtistsModule {}
