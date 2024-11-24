import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class DepositHistory {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  asset: string;

  @Column({ nullable: false, type: 'varchar' })
  network: string;

  @Column({ nullable: false, type: 'varchar' })
  network_fee: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  amount: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  destination: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  status: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  txid: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
