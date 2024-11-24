import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DepositDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;
}

export class WithdrawDto {
  // symbol ,address ,amount ,network
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  address: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  network: string;
}

export class ConvertDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  quantity: number;

  // side: buy or sell
  @IsEnum(['buy', 'sell'])
  @IsNotEmpty()
  @ApiProperty({ required: true })
  side: string;
}

export class TransferDto {
  // coin, amount, type (SPOT_TO_FUNDING)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  coin: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  type: string;
}
