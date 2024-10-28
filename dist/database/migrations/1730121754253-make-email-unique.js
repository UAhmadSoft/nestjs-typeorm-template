"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeEmailUnique1730121754253 = void 0;
class MakeEmailUnique1730121754253 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE users DROP CONSTRAINT unique_email`);
    }
}
exports.MakeEmailUnique1730121754253 = MakeEmailUnique1730121754253;
//# sourceMappingURL=1730121754253-make-email-unique.js.map