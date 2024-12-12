import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  fullname: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
  @IsNotEmpty()
  @IsNumber()
  version: number;
}
