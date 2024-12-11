import { Injectable } from '@nestjs/common';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorites } from './schema/favourite.schema';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectModel('favorite') private favoritesModel: Model<Favorites>,
  ) {}
  async getAllData(): Promise<Favorites[]> {
    const favorites = await this.favoritesModel.find();
    return favorites;
  }
  async getOneData(id: string): Promise<Favorites> {
    const getOne = await this.favoritesModel.findById(id);
    return getOne;
  }
  async deleteData(id: string): Promise<Favorites> {
    const deleteOne = await this.favoritesModel.findByIdAndDelete(id);
    return deleteOne;
  }
  async updateData(id: string, data: UpdateFavouriteDto): Promise<Favorites> {
    const updateFavorite = await this.favoritesModel.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      },
    );
    return updateFavorite;
  }
  async createFavorites(data: CreateFavouriteDto): Promise<Favorites> {
    const newFavorite = await this.favoritesModel.create(data);
    await newFavorite.save();
    return newFavorite;
  }
}
