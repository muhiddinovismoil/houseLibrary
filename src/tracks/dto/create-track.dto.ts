import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  artist: string;
  @IsNumber()
  @IsNotEmpty()
  duration: number;
}
