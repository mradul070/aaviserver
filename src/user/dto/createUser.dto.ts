import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { USER_TYPE } from 'src/constant';

export class CreateUserPayload {
  
    @ApiProperty({
        description: 'User name',
        example: 'Raj'
    })
    @IsNotEmpty()
    name: string;
    @ApiProperty({
        description: 'Email',
        example: 'raj@gmail.com',
    })
    @IsNotEmpty()
    email: string;
    @ApiProperty({
        description: 'Password',
        example: '123456',
    })
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        description: 'Mobile Number',
        example: '9876543210',
    })
    @IsNotEmpty()
    mobileNumber: string;
    
    @ApiProperty({
        description: 'userType',
        example: Object.values(USER_TYPE).join(', '),
        enum: USER_TYPE
    })
    @IsEnum(USER_TYPE)
    @IsNotEmpty()
    userType: string;
    
    @ApiProperty({
        description: 'Is Active User',
        example: true,
    })
    @IsOptional()
    isActive: boolean;
}
