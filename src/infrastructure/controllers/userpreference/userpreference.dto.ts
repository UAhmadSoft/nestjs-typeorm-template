import { IsString, IsNotEmpty, IsOptional, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserPreferenceDto {
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
options:string;
}



export class UpdateUserPreferenceDto {
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
options:string;
}
