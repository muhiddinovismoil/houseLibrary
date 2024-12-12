import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksSchema } from './schema/track.schema';
import { TracksRepository } from './repository/tracks.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'tracks', schema: TracksSchema }]),
  ],
  controllers: [TracksController],
  providers: [TracksRepository, TracksService],
})
export class TracksModule {}
