"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRoleToUser1759838627721 = void 0;
class AddRoleToUser1759838627721 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "role" character varying NOT NULL DEFAULT 'user'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    }
}
exports.AddRoleToUser1759838627721 = AddRoleToUser1759838627721;
//# sourceMappingURL=1759838627721-add-role-to-user.js.map