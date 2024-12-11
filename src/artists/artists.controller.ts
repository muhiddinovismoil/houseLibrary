import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post('/')
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.createArtists(createArtistDto);
  }

  @Get('/')
  findAll() {
    return this.artistsService.getAllData();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.getOneData(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.updateData(id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsService.deleteData(id);
  }
}
