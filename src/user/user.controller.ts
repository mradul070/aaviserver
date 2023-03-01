import {
  Controller,
  Get,
  Injectable,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';

@Injectable()
@Controller('users')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getUser(@Request() req) {
    return this.userService.getUser(req);
  }

  // @Post('forget-password')
  // async forgetPassword() {
  //     // return this.userService.
  // }
}
