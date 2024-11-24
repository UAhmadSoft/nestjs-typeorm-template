import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createDepositHistoryTable1732291036702
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'deposit_historys',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'created_on',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_on',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'asset',
            type: 'varchar',
          },
          {
            name: 'network',
            type: 'varchar',
          },
          {
            name: 'network_fee',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'boolean',
            default: true,
          },
          {
            name: 'destination',
            type: 'boolean',
            default: true,
          },
          {
            name: 'status',
            type: 'boolean',
            default: true,
          },
          {
            name: 'txid',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('deposit_historys', true);
  }
}
