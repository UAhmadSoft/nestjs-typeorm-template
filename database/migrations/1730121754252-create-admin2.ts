import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class CreateAdmin21730121754252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE users
      ADD COLUMN role VARCHAR(255) DEFAULT 'user'
    `);

    const passwordHash = await bcrypt.hash('password', 10);

    await queryRunner.query(`
      INSERT INTO users (email, password, role)
      VALUES ('admin@gmail.com', '${passwordHash}', 'admin')
    `);

    await queryRunner.query(`
      INSERT INTO profiles ("user", fullName)
      VALUES (
        (SELECT id FROM users WHERE email = 'admin@gmail.com'),
        'Admin'
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM profiles WHERE userId = (SELECT id FROM users WHERE email = 'admin@gmail.com')
    `);

    await queryRunner.query(`
      DELETE FROM users WHERE email = 'admin@gmail.com'
    `);

    await queryRunner.query(`
      ALTER TABLE users
      DROP COLUMN role
    `);
  }
}
