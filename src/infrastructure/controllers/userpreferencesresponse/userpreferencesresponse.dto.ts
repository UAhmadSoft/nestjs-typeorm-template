import { IsString, IsNotEmpty, IsOptional, IsNumber, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserPreferencesResponseDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
options:string;
@IsNumber()
@IsNotEmpty()
@ApiProperty({ required: true })
user_preference:number;
}



export class UpdateUserPreferencesResponseDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
options:string;
@IsNumber()
@IsOptional()
@ApiProperty({ required: false })
user_preference:number;
}
