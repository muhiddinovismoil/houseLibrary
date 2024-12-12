import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Albums } from '../schema/album.schema';
import { Model } from 'mongoose';
import { UpdateAlbumDto } from '../dto/update-album.dto';
import { CreateAlbumDto } from '../dto/create-album.dto';

@Injectable()
export class AlbumsRepository {
  constructor(
    @InjectModel('albums') private readonly albumsModel: Model<Albums>,
  ) {}
  async findAll(): Promise<Albums[]> {
    const albums = await this.albumsModel.find();
    return albums;
  }
  async findOneData(id: string): Promise<Albums> {
    const getOne = await this.albumsModel.findById(id);
    return getOne;
  }
  async removeData(id: string): Promise<Albums> {
    const deleteOne = await this.albumsModel.findByIdAndDelete(id);
    return deleteOne;
  }
  async updateByIdData(id: string, data: UpdateAlbumDto): Promise<Albums> {
    const updatedAlbum = await this.albumsModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedAlbum;
  }
  async addAlbum(data: CreateAlbumDto): Promise<Albums> {
    const newAlbums = await this.albumsModel.create(data);
    await newAlbums.save();
    return newAlbums;
  }
}
