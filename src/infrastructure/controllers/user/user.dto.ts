import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'user@example.com' })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'Str0ngP@ssw0rd!' })
  password: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 123456 })
  signup_otp: number;
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: '2025-10-07T12:00:00.000Z' })
  signup_otp_expiry: Date;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 654321 })
  forget_email_otp: number;
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: '2025-10-07T13:00:00.000Z' })
  forget_email_otp_expiry: Date;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: false })
  is_social_login: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: true })
  is_email_verified: boolean;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'new@example.com' })
  upcoming_email: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 111222 })
  upcoming_email_otp: number;
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: '2025-10-07T14:00:00.000Z' })
  upcoming_email_otp_expiry: Date;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: true })
  allow_notifications: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: true })
  is_active: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: false })
  is_banned: boolean;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'device-uuid-1234' })
  device: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'user@example.com' })
  email: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'Str0ngP@ssw0rd!' })
  password: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, example: 123456 })
  signup_otp: number;
  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, example: '2025-10-07T12:00:00.000Z' })
  signup_otp_expiry: Date;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, example: 654321 })
  forget_email_otp: number;
  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, example: '2025-10-07T13:00:00.000Z' })
  forget_email_otp_expiry: Date;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, example: false })
  is_social_login: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, example: true })
  is_email_verified: boolean;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'new@example.com' })
  upcoming_email: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false, example: 111222 })
  upcoming_email_otp: number;
  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, example: '2025-10-07T14:00:00.000Z' })
  upcoming_email_otp_expiry: Date;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, example: true })
  allow_notifications: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, example: true })
  is_active: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, example: false })
  is_banned: boolean;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, example: 'device-uuid-1234' })
  device: string;
}
