import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from './schema/users.schema';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { IUpdatePassword } from 'src/interfaces/interfaces';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class AuthService {
  constructor(@Inject() private usersRepository: UsersRepository) {}
  async registerUsers(data: CreateAuthDto): Promise<User | null> {
    return await this.usersRepository.register(data);
  }
  async loginUser(data: UpdateAuthDto): Promise<object> {
    return this.usersRepository.login(data);
  }
  async updatePasswordById(id: string, data: IUpdatePassword): Promise<object> {
    return await this.usersRepository.updatePassword(id, data);
  }
  async deleteUserById(id: string): Promise<object> {
    return await this.usersRepository.deleteUser(id);
  }
  async getAllUsers(): Promise<object> {
    return await this.usersRepository.getAllData();
  }
  async getOneUserData(id: string): Promise<object> {
    return await this.usersRepository.getOneData(id);
  }
}
