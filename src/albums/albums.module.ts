import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumsSchema } from './schema/album.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'albums', schema: AlbumsSchema }]),
  ],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
