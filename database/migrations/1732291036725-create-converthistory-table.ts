import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createConvertHistoryTable1732291036725
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'convert_historys',
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
            name: 'symbol',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'boolean',
            default: true,
          },
          {
            name: 'orderId',
            type: 'boolean',
            default: true,
          },
          {
            name: 'clientOrderId',
            type: 'boolean',
            default: true,
          },
          {
            name: 'price',
            type: 'boolean',
            default: true,
          },
          {
            name: 'origQty',
            type: 'boolean',
            default: true,
          },
          {
            name: 'executedQty',
            type: 'boolean',
            default: true,
          },
          {
            name: 'type',
            type: 'boolean',
            default: true,
          },
          {
            name: 'side',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('convert_historys', true);
  }
}
