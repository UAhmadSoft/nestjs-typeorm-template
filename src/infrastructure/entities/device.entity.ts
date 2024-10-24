import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Devices {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  device_id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
