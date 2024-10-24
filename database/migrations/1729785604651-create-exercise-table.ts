import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createExercisesTable1729785604651 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exercises',
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
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'area',
            type: 'timestamp',
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('exercises', true);
  }
}
