import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class JwtPayloadDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    email?: string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    role?: string;
  
    @IsOptional()
    @IsBoolean()
    blocked?: boolean;
  }
  