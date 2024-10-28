import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserPreferences } from './userpreference.entity';

@Entity()
export class UserPreferencesResponses {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  options: string;

  @ManyToOne(() => UserPreferences, (userPreferences) => userPreferences)
  @JoinColumn({ name: 'user_preference' })
  user_preference: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
