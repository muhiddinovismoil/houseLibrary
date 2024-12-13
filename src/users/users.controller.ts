import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Get,
} from '@nestjs/common';
import { AuthService } from './users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { IUpdatePassword } from 'src/interfaces/interfaces';

@Controller('users')
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @Post('register')
  async registerUser(@Body() createAuthDto: CreateAuthDto) {
    const newUser = await this.usersService.registerUsers(createAuthDto);
    if (!newUser) {
      return {
        status: 'failed',
        message: 'User already exists or registration failed',
      };
    }
    return { status: 'success', data: newUser };
  }

  @Post('login')
  async loginUser(@Body() loginAuthDto: UpdateAuthDto) {
    const response = await this.usersService.loginUser(loginAuthDto);
    if (!response) {
      return { status: 'failed', message: 'Invalid login credentials' };
    }
    return response;
  }
  @Get('/')
  async getAll() {
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.usersService.getOneUserData(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAuthDto: IUpdatePassword,
  ) {
    try {
      const updatePass = await this.usersService.updatePasswordById(
        id,
        updateAuthDto,
      );
      return {
        status: 'success',
        ...updatePass,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const response = await this.usersService.deleteUserById(id);
    return { message: 'User deleted', deletedUser: response };
  }
}
