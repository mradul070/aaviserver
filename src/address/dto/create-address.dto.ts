import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
export class CreateAddressDto {

    @ApiProperty()
    @IsNotEmpty()
    line1: string

    @ApiProperty()
    @IsOptional()
    line2: string

    @ApiProperty()
    @IsOptional()
    line3: string

    @ApiProperty()
    @IsNotEmpty()
    city: string

    @ApiProperty()
    @IsNotEmpty()
    state: string

    @ApiProperty()
    @IsNotEmpty()
    country: string;

    @ApiProperty()
    @IsNotEmpty()
    zipCode: number

    @ApiProperty()
    @IsOptional()
    isPrimary: boolean
}