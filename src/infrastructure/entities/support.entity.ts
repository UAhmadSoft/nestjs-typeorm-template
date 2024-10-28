import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, } from 'typeorm';

@Entity()
export class Supports{
@PrimaryGeneratedColumn({ type: 'int4' })
id: number;

@Column({nullable: false,type:'varchar', })
first_name:string;

@Column({nullable: false,type:'varchar', })
last_name:string;

@Column({nullable: false,type:'varchar', })
email:string;

@Column({nullable: false,type:'varchar', })
subject:string;

@Column({nullable: false,type:'varchar', })
message:string;

@CreateDateColumn({ type: 'timestamp' })
created_on: Date;

@UpdateDateColumn({ type: 'timestamp' })
updated_on: Date;
}