import { IsString, IsNotEmpty, IsOptional, IsDate, IsNumber, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateExerciseDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
title:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
description:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
image:string;
@IsDate()
@IsNotEmpty()
@ApiProperty({ required: true })
area:Date;
@IsNumber()
@IsNotEmpty()
@ApiProperty({ required: true })
deal:number;
}



export class UpdateExerciseDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
title:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
description:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
image:string;
@IsDate()
@IsOptional()
@ApiProperty({ required: false })
area:Date;
@IsNumber()
@IsOptional()
@ApiProperty({ required: false })
deal:number;
}
