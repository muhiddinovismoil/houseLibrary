import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';

@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Post('/')
  create(@Body() createFavoritesDto: CreateFavouriteDto) {
    return this.favouritesService.createFavorites(createFavoritesDto);
  }

  @Get('/')
  findAll() {
    return this.favouritesService.getAllData();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favouritesService.getOneData(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavoritesDto: UpdateFavouriteDto,
  ) {
    return this.favouritesService.updateData(id, updateFavoritesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favouritesService.deleteData(id);
  }
}
