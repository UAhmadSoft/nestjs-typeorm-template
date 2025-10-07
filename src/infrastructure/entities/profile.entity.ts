import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from './user.entity';

@Entity()
export class Profiles {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  first_name: string;

  @Column({ nullable: false, type: 'varchar' })
  last_name: string;

  @Column({ nullable: true, type: 'varchar' })
  image_url: string;

  @OneToOne(() => Users)
  @JoinColumn({ name: 'user' })
  user: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
