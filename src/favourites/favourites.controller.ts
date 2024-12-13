import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';

@Controller('favs')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}
  @Get('/')
  getAllFav() {
    return this.favouritesService.getAllFavourites();
  }
  addTrackToFav(
    @Param('id') id: string,
    @Body() createFavoritesDto: CreateFavouriteDto,
  ) {
    return this.favouritesService.addTrackToFav(id, createFavoritesDto.track);
  }
  @Delete('/track/:id')
  removeTrackFromFav(
    @Param('id') id: string,
    @Body() updateFavoritesDto: UpdateFavouriteDto,
  ) {
    return this.favouritesService.deleteTrackFromFav(
      id,
      updateFavoritesDto.track,
    );
  }
  @Post('/album/:id')
  addAlbumToFav(
    @Param('id') id: string,
    @Body() createFavoritesDto: CreateFavouriteDto,
  ) {
    return this.favouritesService.addAlbumToFav(id, createFavoritesDto.album);
  }
  @Delete('/album/:id')
  removeAlbumFromFav(
    @Param('id') id: string,
    @Body() updateFavoritesDto: UpdateFavouriteDto,
  ) {
    return this.favouritesService.deleteAlbumFromFav(
      id,
      updateFavoritesDto.album,
    );
  }
  @Post('/artist/:id')
  addArtistToFav(
    @Param('id') id: string,
    @Body() createFavoritesDto: CreateFavouriteDto,
  ) {
    return this.favouritesService.addArtistToFav(id, createFavoritesDto.artist);
  }
  @Delete('/artist/:id')
  removeArtistFromFav(
    @Param('id') id: string,
    @Body() updateFavoritesDto: UpdateFavouriteDto,
  ) {
    return this.favouritesService.deleteArtistFromFav(
      id,
      updateFavoritesDto.artist,
    );
  }
}
