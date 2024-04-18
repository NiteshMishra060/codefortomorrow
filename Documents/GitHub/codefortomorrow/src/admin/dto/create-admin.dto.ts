import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNumber,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';


export class serviceDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    CategoryName?: string;

    @ApiProperty()
    @IsString()
    serviceName: string;

    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsString()
    priceOptions: string;
}

export class loginDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;
}

export class servicePriceDto {
    
    @ApiProperty()
    @IsString()
    serviceName: string;


    @ApiProperty()
    @IsString()
    Duration: string;

    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    type: string;
    
}

export class serviceUpdate {
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    serviceName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Duration?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    price?: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    type?: string;
    
}



