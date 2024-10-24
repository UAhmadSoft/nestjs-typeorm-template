import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCategoriesTable1729785604647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
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
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories', true);
  }
}
