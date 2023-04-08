import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUserPayload {
  @ApiProperty({
    description: 'Email',
    example: 'raj@gmail.com',
  })
  @IsNotEmpty()
  username: string;
  @ApiProperty({
    description: 'Password',
    example: '123456',
  })
  @IsNotEmpty()
  password: string;
}
