import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createProfilesTable1729785604630 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profiles',
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
            name: 'first_name',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'last_name',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'image_url',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'user',
            type: 'int4',
          },
        ],
      }),
    );
    await queryRunner.createForeignKeys('profiles', [
      new TableForeignKey({
        name: 'profiles_users_fk1',
        columnNames: ['user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ]);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('profiles', 'profiles_users_fk1');
    await queryRunner.dropTable('profiles', true);
  }
}
