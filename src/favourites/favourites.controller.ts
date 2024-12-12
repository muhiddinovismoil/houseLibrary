import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';

@Controller('favs')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}
  @Get('/')
  getAllFav() {
    return this.favouritesService.getAllData();
  }
  addTrackToFav(
    @Param('id') id: string,
    @Body() createFavoritesDto: CreateFavouriteDto,
  ) {
    return this.favouritesService.addTrack(id, createFavoritesDto.track);
  }
  @Delete('/track/:id')
  removeTrackFromFav(
    @Param('id') id: string,
    @Body() updateFavoritesDto: UpdateFavouriteDto,
  ) {
    return this.favouritesService.deleteTrack(id, updateFavoritesDto.track);
  }
  @Post('/album/:id')
  addAlbumToFav(
    @Param('id') id: string,
    @Body() createFavoritesDto: CreateFavouriteDto,
  ) {
    return this.favouritesService.addAlbum(id, createFavoritesDto.album);
  }
  @Delete('/album/:id')
  removeAlbumFromFav(
    @Param('id') id: string,
    @Body() updateFavoritesDto: UpdateFavouriteDto,
  ) {
    return this.favouritesService.deleteAlbum(id, updateFavoritesDto.album);
  }
  @Post('/artist/:id')
  addArtistToFav(
    @Param('id') id: string,
    @Body() createFavoritesDto: CreateFavouriteDto,
  ) {
    return this.favouritesService.addArtist(id, createFavoritesDto.artist);
  }
  @Delete('/artist/:id')
  removeArtistFromFav(
    @Param('id') id: string,
    @Body() updateFavoritesDto: UpdateFavouriteDto,
  ) {
    return this.favouritesService.deleteArtist(id, updateFavoritesDto.artist);
  }
}
