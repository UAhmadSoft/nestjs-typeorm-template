import {
  MigrationInterface,
  QueryRunner,
  Table
} from 'typeorm';

export class createDevicesTable1729782475401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'devices',
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
          },{
name:'device_id',
type:'string',
}
,],
      }),
    );
}
public async down(queryRunner: QueryRunner): Promise<void> {
   await queryRunner.dropTable('devices', true);
  }
}