import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToOne, JoinColumn, } from 'typeorm';
import { Devices } from './device.entity';

@Entity()
export class Users{
@PrimaryGeneratedColumn({ type: 'int4' })
id: number;

@Column({nullable: false,type:'varchar', })
email:string;

@Column({nullable: false,type:'varchar', })
password:string;

@Column({nullable: false,type:'int', })
signup_otp:number;

@Column({nullable: false,type:'timestamp', })
signup_otp_expiry:Date;

@Column({nullable: false,type:'int', })
forget_email_otp:number;

@Column({nullable: false,type:'timestamp', })
forget_email_otp_expiry:Date;

@Column({nullable: false,type:'varchar', })
agent_rera:string;

@Column({nullable: false,type:'boolean',default: false, })
is_social_login:boolean;

@Column({nullable: false,type:'boolean',default: false, })
is_email_verified:boolean;

@Column({nullable: false,type:'varchar', })
upcoming_email:string;

@Column({nullable: false,type:'int', })
upcoming_email_otp:number;

@Column({nullable: false,type:'timestamp', })
upcoming_email_otp_expiry:Date;

@Column({nullable: false,type:'boolean',default: true, })
allow_notifications:boolean;

@Column({nullable: false,type:'boolean',default: true, })
is_active:boolean;

@Column({nullable: false,type:'boolean',default: false, })
is_banned:boolean;

@OneToOne(() =>Devices)
@JoinColumn({ name: 'device' })
device: number;

@CreateDateColumn({ type: 'timestamp' })
created_on: Date;

@UpdateDateColumn({ type: 'timestamp' })
updated_on: Date;
}