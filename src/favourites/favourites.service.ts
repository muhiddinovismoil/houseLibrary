import { Inject, Injectable } from '@nestjs/common';
import { Favorites } from './schema/favourite.schema';
import { FavouriteRepository } from './repository/favourites.repository';

@Injectable()
export class FavouritesService {
  constructor(@Inject() private favouriteRepository: FavouriteRepository) {}
  async getAllFavourites(): Promise<Favorites[]> {
    return await this.favouriteRepository.getAllData();
  }
  async addTrackToFav(id: string, track: string[]): Promise<Favorites> {
    return await this.favouriteRepository.addTrack(id, track);
  }
  async deleteTrackFromFav(id: string, track: string[]): Promise<Favorites> {
    return await this.favouriteRepository.deleteTrack(id, track);
  }
  async addAlbumToFav(id: string, album: string[]): Promise<Favorites> {
    return await this.favouriteRepository.addAlbum(id, album);
  }
  async deleteAlbumFromFav(id: string, album: string[]): Promise<Favorites> {
    return await this.favouriteRepository.deleteAlbum(id, album);
  }

  async addArtistToFav(id: string, artistId: string[]): Promise<Favorites> {
    return await this.favouriteRepository.addArtist(id, artistId);
  }
  async deleteArtistFromFav(
    id: string,
    artistId: string[],
  ): Promise<Favorites> {
    return await this.favouriteRepository.deleteArtist(id, artistId);
  }
}
