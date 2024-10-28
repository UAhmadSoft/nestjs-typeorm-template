import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createUserPreferencesResponsesTable1730121125951
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_preferences_responses',
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
            name: 'options',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'user_preference',
            type: 'int4',
          },
        ],
      }),
    );
    await queryRunner.createForeignKeys('user_preferences_responses', [
      new TableForeignKey({
        name: 'user_preferences_responses_user_preferences_fk1',
        columnNames: ['user_preference'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_preferences',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ]);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'user_preferences_responses',
      'user_preferences_responses_user_preferences_fk1',
    );
    await queryRunner.dropTable('user_preferences_responses', true);
  }
}
