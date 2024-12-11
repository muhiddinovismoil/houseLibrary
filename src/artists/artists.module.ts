import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsSchema } from './schema/artist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'artists', schema: ArtistsSchema }]),
  ],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}
