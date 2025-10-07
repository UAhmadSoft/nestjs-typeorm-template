import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AuthRoleDto {
  @ApiProperty({ required: true, example: 'admin' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
    example: 'Administrator role with all privileges',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ required: false, example: 'super-admin' })
  @IsOptional()
  @IsString()
  parent_role: string;

  @ApiProperty({ required: true, example: ['read:users', 'write:users'] })
  @ArrayNotEmpty()
  @IsArray()
  permissions?: string[];
}
