import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Request } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/database/entity/user.entity';
import { CreateUserPayload } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly mailerService: MailerService,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,

  ) {}
  async createUser(body: CreateUserPayload) {
    return await this.userModel.create(body)
  }
  async getUser(@Request() req) {
    const res = await this.mailerService.sendMail({
      to: 'smradul599@gmail.com',
      from: 'mradulj070@gmail.com',
      subject: 'Hello',
      text: 'Hello'
    })
    console.log(res)
    return req.user;
  }
}
