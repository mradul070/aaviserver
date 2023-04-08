import {
  Body,
  Controller,
  Get,
  Injectable,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserPayload } from './dto/createUser.dto';
import { UserService } from './user.service';

@Injectable()
@Controller('users')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  async createUser(@Body() createUserDto: CreateUserPayload, @Request() req) { 
    return await this.userService.createUser(createUserDto, req)
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getUser(@Request() req) {
    return this.userService.getUser(req);
  }
  
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/search')
  async searchParties(@Query('searchBy') searchBy: string) {
    return this.userService.searchParties(searchBy)
  }
}
