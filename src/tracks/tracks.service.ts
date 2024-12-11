import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tracks } from './schema/track.schema';

@Injectable()
export class TracksService {
  constructor(@InjectModel('tracks') private tracksModel: Model<Tracks>) {}
  async getAllData(): Promise<Tracks[]> {
    const tracks = await this.tracksModel.find();
    return tracks;
  }
  async getOneData(id: string): Promise<Tracks> {
    const getOne = await this.tracksModel.findById(id);
    return getOne;
  }
  async deleteData(id: string): Promise<Tracks> {
    const deleteOne = await this.tracksModel.findByIdAndDelete(id);
    return deleteOne;
  }
  async updateData(id: string, data: UpdateTrackDto): Promise<Tracks> {
    const updateTracks = await this.tracksModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updateTracks;
  }
  async createTracks(data: CreateTrackDto): Promise<Tracks> {
    const newTracks = await this.tracksModel.create(data);
    await newTracks.save();
    return newTracks;
  }
}
