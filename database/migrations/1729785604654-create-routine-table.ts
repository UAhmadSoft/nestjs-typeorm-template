import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createRoutinesTable1729785604654 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'routines',
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
            name: 'time',
            type: 'int',
          },
          {
            name: 'play_soung',
            type: 'boolean',
            default: false,
          },
          {
            name: 'time_delay',
            type: 'int',
          },
          {
            name: 'user',
            type: 'int4',
            isNullable: true,
            default: null,
          },
        ],
      }),
    );
    await queryRunner.createForeignKeys('routines', [
      new TableForeignKey({
        name: 'routines_exercises_fk1',
        columnNames: ['user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exercises',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ]);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('routines', 'routines_exercises_fk1');
    await queryRunner.dropTable('routines', true);
  }
}
