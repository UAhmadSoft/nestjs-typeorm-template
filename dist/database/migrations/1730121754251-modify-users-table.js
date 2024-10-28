"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyUsersTable1730121754251 = void 0;
const typeorm_1 = require("typeorm");
class ModifyUsersTable1730121754251 {
    async up(queryRunner) {
        await queryRunner.changeColumn('users', 'device', new typeorm_1.TableColumn({
            name: 'device',
            type: 'varchar',
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.changeColumn('users', 'device', new typeorm_1.TableColumn({
            name: 'device',
            type: 'text',
            isNullable: true,
        }));
    }
}
exports.ModifyUsersTable1730121754251 = ModifyUsersTable1730121754251;
//# sourceMappingURL=1730121754251-modify-users-table.js.map