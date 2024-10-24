import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToOne, JoinColumn, } from 'typeorm';
import { Users } from './user.entity';

@Entity()
export class Profiles{
@PrimaryGeneratedColumn({ type: 'int4' })
id: number;

@Column({nullable: false,type:'varchar', })
fullname:string;

@Column({nullable: false,type:'time', })
reminder_time:Date;

@Column({nullable: false,type:'simple-array', })
flexibility_level:string[];

@Column({nullable: false,type:'simple-array', })
stretching_time:string[];

@Column({nullable: false,type:'simple-array', })
goal:string[];

@Column({nullable: false,type:'simple-array', })
discomfort_areas:string[];

@OneToOne(() =>Users)
@JoinColumn({ name: 'user' })
user: number;

@CreateDateColumn({ type: 'timestamp' })
created_on: Date;

@UpdateDateColumn({ type: 'timestamp' })
updated_on: Date;
}