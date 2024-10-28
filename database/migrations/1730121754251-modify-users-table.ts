import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ModifyUsersTable1730121754251 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'device',
      new TableColumn({
        name: 'device',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'device',
      new TableColumn({
        name: 'device',
        type: 'text',
        isNullable: true,
      }),
    );
  }
}
