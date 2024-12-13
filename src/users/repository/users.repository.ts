import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schema/users.schema';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { IUpdatePassword } from 'src/interfaces/interfaces';
import { generateHash, comparePassword } from '../helpers/bcrypt';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('users') private usersModel: Model<User>) {}
  async register(data: CreateAuthDto): Promise<User | null> {
    const currUser = await this.usersModel.findOne({ email: data.email });
    if (currUser) {
      return null;
    }
    const hashedPassword = await generateHash(data.password);
    const newUser = new this.usersModel({
      ...data,
      password: hashedPassword,
    });
    await newUser.save();
    const userObject = newUser.toObject();
    delete userObject.password;
    return userObject;
  }
  async login(data: UpdateAuthDto): Promise<object> {
    if (!data.email || !data.password) {
      return { message: 'Email and password must not be empty' };
    }
    const currUser = await this.usersModel.findOne({ email: data.email });
    if (!currUser) {
      return { message: 'User not found' };
    }
    const comparePass = await comparePassword(data.password, currUser.password);
    if (!comparePass) {
      return { message: 'Incorrect email or password' };
    }
    return {
      message: 'You are logged in',
      user: { id: currUser._id, email: currUser.email },
    };
  }
  async updatePassword(id: string, data: IUpdatePassword): Promise<object> {
    const currUser = await this.usersModel.findById(id);
    if (!currUser) {
      throw new Error('User not found');
    }
    const isOldPasswordCorrect = await comparePassword(
      data.oldPassword,
      currUser.password,
    );
    if (!isOldPasswordCorrect) {
      throw new Error('Your old password does not match');
    }
    const hashedPassword = await generateHash(data.newPassword);
    await this.usersModel.findByIdAndUpdate(id, { password: hashedPassword });
    return { message: 'Your password has been updated successfully' };
  }
  async deleteUser(id: string): Promise<object> {
    const deleteUser = await this.usersModel.findByIdAndDelete(id);
    if (!deleteUser) {
      return {
        msg: 'Not found',
      };
    }
    return deleteUser.id;
  }
  async getAllData(): Promise<object> {
    const users = await this.usersModel.find();
    if (users.length == 0) {
      return { msg: 'NOT FOUND' };
    }
    const sanitizedUsers = users.map((user) => {
      const userObject = user.toObject();
      delete userObject.password;
      return userObject;
    });
    return sanitizedUsers;
  }
  async getOneData(id: string): Promise<object> {
    const getOne = await this.usersModel.findById(id);
    if (!getOne) {
      return { msg: 'NOT FOUND' };
    }
    return getOne;
  }
}
