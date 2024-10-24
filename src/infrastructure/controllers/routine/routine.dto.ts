import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoutineDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  title: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  time: number;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  play_soung: boolean;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  time_delay: number;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  user: number;

  // exercises as array of numbers
  @IsNumber({}, { each: true })
  @IsNotEmpty()
  @ApiProperty({ required: false })
  exercises: number[];
}

export class UpdateRoutineDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  title: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  time: number;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  play_soung: boolean;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  time_delay: number;
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  user: number;
  // exercises as array of numbers
  @IsNumber({}, { each: true })
  @IsOptional()
  @ApiProperty({ required: false })
  exercises: number[];
}
