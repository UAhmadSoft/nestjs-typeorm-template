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
  @ApiProperty({ required: true })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  password: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  signup_otp: number;
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  signup_otp_expiry: Date;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  forget_email_otp: number;
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  forget_email_otp_expiry: Date;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  agent_rera: string;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  is_social_login: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  is_email_verified: boolean;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  upcoming_email: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  upcoming_email_otp: number;
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  upcoming_email_otp_expiry: Date;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  allow_notifications: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  is_active: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  is_banned: boolean;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  device: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  email: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  password: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  signup_otp: number;
  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  signup_otp_expiry: Date;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  forget_email_otp: number;
  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  forget_email_otp_expiry: Date;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  agent_rera: string;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  is_social_login: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  is_email_verified: boolean;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  upcoming_email: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  upcoming_email_otp: number;
  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false })
  upcoming_email_otp_expiry: Date;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  allow_notifications: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  is_active: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  is_banned: boolean;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  device: string;
}
