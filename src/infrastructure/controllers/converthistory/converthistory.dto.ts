import { IsString, IsNotEmpty, IsOptional, IsBoolean, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateConvertHistoryDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
symbol:string;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
status:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
orderId:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
clientOrderId:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
price:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
origQty:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
executedQty:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
type:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
side:boolean;
}



export class UpdateConvertHistoryDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
symbol:string;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
status:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
orderId:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
clientOrderId:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
price:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
origQty:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
executedQty:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
type:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
side:boolean;
}
