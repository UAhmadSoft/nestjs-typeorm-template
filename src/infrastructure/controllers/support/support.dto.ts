import { IsString, IsNotEmpty, IsOptional, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateSupportDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
first_name:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
last_name:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
email:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
subject:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
message:string;
}



export class UpdateSupportDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
first_name:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
last_name:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
email:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
subject:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
message:string;
}
