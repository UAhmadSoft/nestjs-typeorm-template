import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoinDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  image: string;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  active: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  depositable: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  withdrawable: boolean;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  exchangeable: boolean;
}

export class UpdateCoinDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  symbol: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  name: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  image: string;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  active: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  depositable: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  withdrawable: boolean;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  exchangeable: boolean;
}
