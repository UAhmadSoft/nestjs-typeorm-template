import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray } from 'class-validator';

export class AuthUserRoleDto {
  @ApiProperty({ required: true, example: ['admin', 'editor'] })
  @ArrayNotEmpty()
  @IsArray()
  roles: string[];
}
