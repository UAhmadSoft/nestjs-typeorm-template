import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  title: string;

  @Column({ nullable: false, type: 'varchar' })
  image: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
