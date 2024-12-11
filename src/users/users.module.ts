import { Module } from '@nestjs/common';
import { AuthService } from './users.service';
import { AuthController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class UsersModule {}
