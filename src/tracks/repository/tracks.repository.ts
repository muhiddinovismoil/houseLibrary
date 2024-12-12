import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tracks } from '../schema/track.schema';
import { UpdateTrackDto } from '../dto/update-track.dto';
import { CreateTrackDto } from '../dto/create-track.dto';

@Injectable()
export class TracksRepository {
  constructor(@InjectModel('tracks') private tracksModel: Model<Tracks>) {}
  async findAll(): Promise<Tracks[]> {
    const tracks = await this.tracksModel.find();
    return tracks;
  }
  async findOne(id: string): Promise<Tracks> {
    const getOne = await this.tracksModel.findById(id);
    return getOne;
  }
  async deleteTrack(id: string): Promise<Tracks> {
    const deleteOne = await this.tracksModel.findByIdAndDelete(id);
    return deleteOne;
  }
  async updateTrack(id: string, data: UpdateTrackDto): Promise<Tracks> {
    const updateTracks = await this.tracksModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updateTracks;
  }
  async create(data: CreateTrackDto): Promise<Tracks> {
    const newTracks = await this.tracksModel.create(data);
    await newTracks.save();
    return newTracks;
  }
}
