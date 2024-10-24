import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Exercises } from './exercise.entity';

@Entity()
export class Routines {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  title: string;

  @Column({ nullable: false, type: 'int' })
  time: number;

  @Column({ nullable: false, type: 'boolean', default: false })
  play_soung: boolean;

  @Column({ nullable: false, type: 'int' })
  time_delay: number;

  @ManyToMany(() => Exercises)
  @JoinColumn({ name: 'exercise' })
  exercises: Exercises[];

  @ManyToOne(() => Exercises, (exercises) => exercises)
  @JoinColumn({ name: 'user' })
  user: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
