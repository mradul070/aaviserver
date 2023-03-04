import { Injectable, Request } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/database/entity/user.entity';
import { CreateUserPayload } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,

  ) {}
  async createUser(body: CreateUserPayload) {
    return await this.userModel.create(body)
  }
  async getUser(@Request() req) {
    return req.user;
  }
}
