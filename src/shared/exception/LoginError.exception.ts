import { HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';

export class LoginErrorException extends HttpException {
    constructor(message: string) {
        super({message: message}, HttpStatus.FOUND)
    }
}