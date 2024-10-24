import { IsString, IsNotEmpty, IsOptional, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCategoryDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
title:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
image:string;
}



export class UpdateCategoryDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
title:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
image:string;
}
