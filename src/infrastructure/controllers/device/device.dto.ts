import { IsString, IsNotEmpty, IsOptional, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateDeviceDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
device_id:string;
}



export class UpdateDeviceDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
device_id:string;
}
