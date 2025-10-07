import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AuthPermissionDto {
  @ApiProperty({ required: true, example: 'read:users' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true, example: 'Allows reading users' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ required: false, example: 1 })
  @IsOptional()
  @IsNumber()
  app_module: number = null;
}
