import { HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';

export class ForbiddenException extends UnauthorizedException {
  constructor(message: string) {
    super({ message: message });
  }
}
