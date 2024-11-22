import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Coins {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  symbol: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  image: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  active: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  depositable: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  withdrawable: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  exchangeable: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
