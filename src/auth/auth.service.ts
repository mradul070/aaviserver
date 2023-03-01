import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/database/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user')
    private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const user: any = await this.userModel
      .findOne({
        email: username,
        password: password,
      })
      .exec();
    if (user && user.password === password) {
      const { password, ...rest } = user._doc;
      return rest;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      userId: user._id,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
