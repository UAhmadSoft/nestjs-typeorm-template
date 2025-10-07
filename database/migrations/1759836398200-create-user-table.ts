import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createUsersTable1759836398200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
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
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'device_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'signup_otp',
            isNullable: true,
            type: 'int',
          },
          {
            name: 'signup_otp_expiry',
            isNullable: true,
            type: 'timestamp',
          },
          {
            name: 'forget_email_otp',
            isNullable: true,
            type: 'int',
          },
          {
            name: 'forget_email_otp_expiry',
            isNullable: true,
            type: 'timestamp',
          },
          {
            name: 'is_social_login',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_email_verified',
            type: 'boolean',
            default: false,
          },
          {
            name: 'upcoming_email',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'upcoming_email_otp',
            isNullable: true,
            type: 'int',
          },
          {
            name: 'upcoming_email_otp_expiry',
            isNullable: true,
            type: 'timestamp',
          },
          {
            name: 'allow_notifications',
            type: 'boolean',
            default: true,
          },
          {
            name: 'is_active',
            type: 'boolean',
            default: true,
          },
          {
            name: 'is_banned',
            type: 'boolean',
            default: false,
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users', true);
  }
}
