import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import {LoginErrorException} from '../shared/exception/LoginError.exception'
import { LoginUserPayload } from './dto/login-user-payload.dto';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
      super({ usernameField: 'username' });
  }
  async validate(username: string, password: string) {
    const res = await this.authService.validateUser(username, password);
    if (typeof res === 'string') {
      throw new LoginErrorException(res)
    }
    return res;
  }
}
