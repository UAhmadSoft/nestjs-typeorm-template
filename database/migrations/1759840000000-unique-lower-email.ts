import { MigrationInterface, QueryRunner } from 'typeorm';

export class UniqueLowerEmail1759840000000 implements MigrationInterface {
  name = 'UniqueLowerEmail1759840000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remove duplicates keeping the smallest id for each lower(email)
    await queryRunner.query(`
      DELETE FROM users u USING (
        SELECT MIN(id) as keep_id, LOWER(email) as le
        FROM users
        GROUP BY LOWER(email)
        HAVING COUNT(*) > 1
      ) d
      WHERE LOWER(u.email) = d.le AND u.id <> d.keep_id;
    `);

    // Create unique index on lower(email) to enforce case-insensitive uniqueness
    await queryRunner.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email_lower ON users (LOWER(email));
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS idx_users_email_lower`);
  }
}
