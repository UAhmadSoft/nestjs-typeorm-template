import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, JoinColumn, } from 'typeorm';
import { Categories } from './category.entity';

@Entity()
export class Exercises{
@PrimaryGeneratedColumn({ type: 'int4' })
id: number;

@Column({nullable: false,type:'varchar', })
title:string;

@Column({nullable: false,type:'varchar', })
description:string;

@Column({nullable: false,type:'varchar', })
image:string;

@Column({nullable: false,type:'timestamp', })
area:Date;

@ManyToOne(() =>Categories, (categories) => categories)
@JoinColumn({ name: 'category' })
category: number;

@CreateDateColumn({ type: 'timestamp' })
created_on: Date;

@UpdateDateColumn({ type: 'timestamp' })
updated_on: Date;
}