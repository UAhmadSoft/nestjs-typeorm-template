import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray } from 'class-validator';

export class AuthRolePermissionDto {
  @ApiProperty({ required: true, example: ['read:users', 'write:users'] })
  @ArrayNotEmpty()
  @IsArray()
  permissions: string[];
}
