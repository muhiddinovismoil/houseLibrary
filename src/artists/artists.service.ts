import { Inject, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artists } from './schema/artist.schema';
import { ArtistsRepository } from './repository/artists.repository';

@Injectable()
export class ArtistsService {
  constructor(@Inject() private readonly artistRepository: ArtistsRepository) {}
  async getAllData(): Promise<Artists[]> {
    return await this.artistRepository.getAll();
  }
  async getOneData(id: string): Promise<Artists> {
    return await this.artistRepository.getById(id);
  }
  async deleteData(id: string): Promise<Artists> {
    return await this.artistRepository.deleteArtist(id);
  }
  async updateData(id: string, data: UpdateArtistDto): Promise<Artists> {
    return await this.artistRepository.updateArtist(id, data);
  }
  async createArtists(data: CreateArtistDto): Promise<Artists> {
    return await this.artistRepository.create(data);
  }
}
