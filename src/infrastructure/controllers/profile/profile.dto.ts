import { IsString, IsNotEmpty, IsOptional, IsDate, IsArray, IsNumber, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProfileDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
fullname:string;
@IsDate()
@IsNotEmpty()
@ApiProperty({ required: true })
reminder_time:Date;
@IsArray()
@IsNotEmpty()
@ApiProperty({ required: true })
flexibility_level:string[];
@IsArray()
@IsNotEmpty()
@ApiProperty({ required: true })
stretching_time:string[];
@IsArray()
@IsNotEmpty()
@ApiProperty({ required: true })
goal:string[];
@IsArray()
@IsNotEmpty()
@ApiProperty({ required: true })
discomfort_areas:string[];
@IsNumber()
@IsNotEmpty()
@ApiProperty({ required: true })
user:number;
}



export class UpdateProfileDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
fullname:string;
@IsDate()
@IsOptional()
@ApiProperty({ required: false })
reminder_time:Date;
@IsArray()
@IsOptional()
@ApiProperty({ required: false })
flexibility_level:string[];
@IsArray()
@IsOptional()
@ApiProperty({ required: false })
stretching_time:string[];
@IsArray()
@IsOptional()
@ApiProperty({ required: false })
goal:string[];
@IsArray()
@IsOptional()
@ApiProperty({ required: false })
discomfort_areas:string[];
@IsNumber()
@IsOptional()
@ApiProperty({ required: false })
user:number;
}
