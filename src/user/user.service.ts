import { Injectable, Request } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  async getUser(@Request() req) {
    return req.user;
  }
}
