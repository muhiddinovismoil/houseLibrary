import { Inject, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Albums } from './schema/album.schema';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumsRepository } from './repository/albums.repository';

@Injectable()
export class AlbumsService {
  constructor(@Inject() private readonly albumRepository: AlbumsRepository) {}
  async getAllData(): Promise<Albums[]> {
    return await this.albumRepository.findAll();
  }
  async getOneData(id: string): Promise<Albums> {
    return await this.albumRepository.findOneData(id);
  }
  async deleteData(id: string): Promise<Albums> {
    return await this.albumRepository.removeData(id);
  }
  async updateData(id: string, data: UpdateAlbumDto): Promise<Albums> {
    return await this.albumRepository.updateByIdData(id, data);
  }
  async createAlbum(data: CreateAlbumDto): Promise<Albums> {
    return await this.albumRepository.addAlbum(data);
  }
}
