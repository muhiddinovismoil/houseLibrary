import { IsBoolean, IsString, MinLength } from 'class-validator';
export class CreateArtistDto {
  @IsString()
  @MinLength(3)
  name: string;
  @IsBoolean()
  grammy: boolean;
}
