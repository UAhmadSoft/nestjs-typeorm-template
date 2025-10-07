"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueLowerEmail1759840000000 = void 0;
class UniqueLowerEmail1759840000000 {
    constructor() {
        this.name = 'UniqueLowerEmail1759840000000';
    }
    async up(queryRunner) {
        await queryRunner.query(`
      DELETE FROM users u USING (
        SELECT MIN(id) as keep_id, LOWER(email) as le
        FROM users
        GROUP BY LOWER(email)
        HAVING COUNT(*) > 1
      ) d
      WHERE LOWER(u.email) = d.le AND u.id <> d.keep_id;
    `);
        await queryRunner.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email_lower ON users (LOWER(email));
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX IF EXISTS idx_users_email_lower`);
    }
}
exports.UniqueLowerEmail1759840000000 = UniqueLowerEmail1759840000000;
//# sourceMappingURL=1759840000000-unique-lower-email.js.map