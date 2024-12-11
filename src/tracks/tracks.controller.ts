import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Post('/')
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.tracksService.createTracks(createTrackDto);
  }

  @Get('/')
  findAll() {
    return this.tracksService.getAllData();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tracksService.getOneData(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
    return this.tracksService.updateData(id, updateTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tracksService.deleteData(id);
  }
}
