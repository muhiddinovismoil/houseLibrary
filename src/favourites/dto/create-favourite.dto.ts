import { IsArray, IsString } from 'class-validator';

export class CreateFavouriteDto {
  @IsArray()
  @IsString({ each: true })
  artist: string[];
  @IsArray()
  @IsString({ each: true })
  album: string[];
  @IsArray()
  @IsString({ each: true })
  track: string[];
}
