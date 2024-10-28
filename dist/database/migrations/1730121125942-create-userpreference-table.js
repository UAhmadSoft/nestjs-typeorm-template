"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPreferencesTable1730121125942 = void 0;
const typeorm_1 = require("typeorm");
class createUserPreferencesTable1730121125942 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_preferences',
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
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'options',
                    type: 'varchar',
                    isArray: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('user_preferences', true);
    }
}
exports.createUserPreferencesTable1730121125942 = createUserPreferencesTable1730121125942;
//# sourceMappingURL=1730121125942-create-userpreference-table.js.map