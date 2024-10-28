"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdmin21730121754252 = void 0;
const bcrypt = require("bcrypt");
class CreateAdmin21730121754252 {
    async up(queryRunner) {
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
    async down(queryRunner) {
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
exports.CreateAdmin21730121754252 = CreateAdmin21730121754252;
//# sourceMappingURL=1730121754252-create-admin2.js.map