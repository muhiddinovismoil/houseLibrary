import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Albums } from './schema/album.schema';
import { Model } from 'mongoose';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel('albums') private albumsModel: Model<Albums>) {}
  async getAllData(): Promise<Albums[]> {
    const albums = await this.albumsModel.find();
    return albums;
  }
  async getOneData(id: string): Promise<Albums> {
    const getOne = await this.albumsModel.findById(id);
    return getOne;
  }
  async deleteData(id: string): Promise<Albums> {
    const deleteOne = await this.albumsModel.findByIdAndDelete(id);
    return deleteOne;
  }
  async updateData(id: string, data: UpdateAlbumDto): Promise<Albums> {
    const updatedAlbum = await this.albumsModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedAlbum;
  }
  async createAlbum(data: CreateAlbumDto): Promise<Albums> {
    const newAlbums = await this.albumsModel.create(data);
    await newAlbums.save();
    return newAlbums;
  }
}
