import { Inject, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Tracks } from './schema/track.schema';
import { TracksRepository } from './repository/tracks.repository';

@Injectable()
export class TracksService {
  constructor(@Inject() private tracksRepository: TracksRepository) {}
  async getAllData(): Promise<Tracks[]> {
    return await this.tracksRepository.findAll();
  }
  async getOneData(id: string): Promise<Tracks> {
    const getOne = await this.tracksRepository.findOne(id);
    return getOne;
  }
  async deleteData(id: string): Promise<Tracks> {
    const deleteOne = await this.tracksRepository.deleteTrack(id);
    return deleteOne;
  }
  async updateData(id: string, data: UpdateTrackDto): Promise<Tracks> {
    const updateTracks = await this.tracksRepository.updateTrack(id, data);
    return updateTracks;
  }
  async createTracks(data: CreateTrackDto): Promise<Tracks> {
    return await this.tracksRepository.create(data);
  }
}
