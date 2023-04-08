import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/database/entity/user.entity';
import { errorMessage } from 'src/shared/message/errorMessage';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const user: any = await this.userModel
      .findOne({
        mobileNumber: username,
      })
      .exec();
    if (!user) {
      return errorMessage.MOBILE_NUMBER_NOT_FOUND
    }
    if (user && user.password === password) {
      const { password, ...rest } = user._doc;
      return rest;
    }
    return errorMessage.INVALID_PASSWORD;
  }
  async login(user: any) {
    const payload = { mobileNumber: user.mobileNumber, sub: user._id };
    return {
      userId: user._id,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
