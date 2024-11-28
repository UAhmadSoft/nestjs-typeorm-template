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

export class createLimitOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  side: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  price: number;
}

export class createMarketAmountOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;

  @IsEnum(['buy', 'sell'])
  @IsNotEmpty()
  @ApiProperty({ required: true })
  side: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  amount: number;
}

export class createMarketQuantityOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;

  @IsEnum(['buy', 'sell'])
  @IsNotEmpty()
  @ApiProperty({ required: true })
  side: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  quantity: number;
}

export class createStopLimitOrder {
  //const symbol = "BTCUSDT"; ,quantity = 0.01; ,stopPrice = 50000; ,limitPrice = 49900; ,side = 'SELL'; ,stopLimitTime = 60000;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  symbol: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  stopPrice: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  limitPrice: number;

  @IsEnum(['buy', 'sell'])
  @IsNotEmpty()
  @ApiProperty({ required: true })
  side: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  stopLimitTime: number;
}
