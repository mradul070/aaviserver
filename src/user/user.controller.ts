import {
  Body,
  Controller,
  Get,
  Injectable,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserPayload } from './dto/createUser.dto';
import { UserService } from './user.service';

@Injectable()
@Controller('users')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserPayload) { 
    return await this.userService.createUser(createUserDto)
  }

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
