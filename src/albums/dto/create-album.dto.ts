import { IsNotEmpty, IsString, IsArray, MinLength } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  artist: string;
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  tracks: string[];
}
