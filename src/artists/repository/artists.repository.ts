import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Artists } from '../schema/artist.schema';
import { Model } from 'mongoose';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';
@Injectable()
export class ArtistsRepository {
  constructor(@InjectModel('artists') private artistsModel: Model<Artists>) {}
  async getAll(): Promise<Artists[]> {
    const Artist = await this.artistsModel.find();
    return Artist;
  }
  async getById(id: string): Promise<Artists> {
    const getOne = await this.artistsModel.findById(id);
    return getOne;
  }
  async deleteArtist(id: string): Promise<Artists> {
    const deleteOne = await this.artistsModel.findByIdAndDelete(id);
    return deleteOne;
  }
  async updateArtist(id: string, data: UpdateArtistDto): Promise<Artists> {
    const updateArtist = await this.artistsModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updateArtist;
  }
  async create(data: CreateArtistDto): Promise<Artists> {
    const newArtist = await this.artistsModel.create(data);
    await newArtist.save();
    return newArtist;
  }
}
