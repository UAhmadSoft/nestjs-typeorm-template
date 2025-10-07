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
  @ApiProperty({ required: true, example: 'John' })
  first_name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'Doe' })
  last_name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true, example: 'https://example.com/avatar.png' })
  image_url?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 1 })
  user: number;
}

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true, example: 'John' })
  first_name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true, example: 'Doe' })
  last_name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: true, example: 'https://example.com/avatar.png' })
  image_url?: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, example: 1 })
  user: number;
}
