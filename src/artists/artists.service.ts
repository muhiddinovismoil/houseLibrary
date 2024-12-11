import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artists } from './schema/artist.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel('artists') private artistsModel: Model<Artists>) {}
  async getAllData(): Promise<Artists[]> {
    const Artist = await this.artistsModel.find();
    return Artist;
  }
  async getOneData(id: string): Promise<Artists> {
    const getOne = await this.artistsModel.findById(id);
    return getOne;
  }
  async deleteData(id: string): Promise<Artists> {
    const deleteOne = await this.artistsModel.findByIdAndDelete(id);
    return deleteOne;
  }
  async updateData(id: string, data: UpdateArtistDto): Promise<Artists> {
    const updateArtist = await this.artistsModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updateArtist;
  }
  async createArtists(data: CreateArtistDto): Promise<Artists> {
    const newArtist = await this.artistsModel.create(data);
    await newArtist.save();
    return newArtist;
  }
}
