import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class ConvertHistory {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  symbol: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  status: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  orderId: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  clientOrderId: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  price: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  origQty: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  executedQty: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  type: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  side: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_on: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_on: Date;
}
