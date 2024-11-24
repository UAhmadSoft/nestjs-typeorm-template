import { IsString, IsNotEmpty, IsOptional, IsBoolean, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateDepositHistoryDto {
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
asset:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
network:string;
@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
network_fee:string;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
amount:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
destination:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
status:boolean;
@IsBoolean()
@IsNotEmpty()
@ApiProperty({ required: true })
txid:boolean;
}



export class UpdateDepositHistoryDto {
@IsString()
@IsOptional()
@ApiProperty({ required: false })
asset:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
network:string;
@IsString()
@IsOptional()
@ApiProperty({ required: false })
network_fee:string;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
amount:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
destination:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
status:boolean;
@IsBoolean()
@IsOptional()
@ApiProperty({ required: false })
txid:boolean;
}
