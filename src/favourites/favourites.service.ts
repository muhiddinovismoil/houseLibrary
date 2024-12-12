import { Injectable, NotFoundException } from '@nestjs/common';
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
  async addTrack(id: string, track: string[]): Promise<Favorites> {
    const favorite = await this.favoritesModel.findByIdAndUpdate(
      id,
      { $push: { tracks: track } },
      { new: true },
    );

    if (!favorite) {
      throw new NotFoundException('Favorites not found');
    }

    return favorite;
  }

  async deleteTrack(id: string, track: string[]): Promise<Favorites> {
    const favorite = await this.favoritesModel.findByIdAndUpdate(
      id,
      { $pull: { tracks: track } },
      { new: true },
    );

    if (!favorite) {
      throw new NotFoundException('Favorites not found');
    }

    return favorite;
  }

  async addAlbum(id: string, album: string[]): Promise<Favorites> {
    const favorite = await this.favoritesModel.findByIdAndUpdate(
      id,
      { $push: { albums: album } },
      { new: true },
    );

    if (!favorite) {
      throw new NotFoundException('Favorites not found');
    }

    return favorite;
  }

  async deleteAlbum(id: string, album: string[]): Promise<Favorites> {
    const favorite = await this.favoritesModel.findByIdAndUpdate(
      id,
      { $pull: { albums: album } },
      { new: true },
    );

    if (!favorite) {
      throw new NotFoundException('Favorites not found');
    }

    return favorite;
  }

  async addArtist(id: string, artistId: string[]): Promise<Favorites> {
    const favorite = await this.favoritesModel.findByIdAndUpdate(
      id,
      { $push: { artists: artistId } },
      { new: true },
    );

    if (!favorite) {
      throw new NotFoundException('Favorites not found');
    }

    return favorite;
  }

  async deleteArtist(id: string, artistId: string[]): Promise<Favorites> {
    const favorite = await this.favoritesModel.findByIdAndUpdate(
      id,
      { $pull: { artists: artistId } },
      { new: true },
    );

    if (!favorite) {
      throw new NotFoundException('Favorites not found');
    }

    return favorite;
  }
}
