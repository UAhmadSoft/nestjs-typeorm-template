import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsArray,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  first_name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  last_name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true })
  image_url?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  user: number;
}

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true })
  first_name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true })
  last_name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true })
  image_url?: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  user: number;
}
