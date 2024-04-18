import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class UserDto {
    @IsString()
    @IsNotEmpty()
    email: string;
   
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    role?: string;
  }
  