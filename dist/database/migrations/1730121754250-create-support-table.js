"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupportsTable1730121754250 = void 0;
const typeorm_1 = require("typeorm");
class createSupportsTable1730121754250 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'supports',
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
                    name: 'first_name',
                    type: 'varchar',
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'subject',
                    type: 'varchar',
                },
                {
                    name: 'message',
                    type: 'varchar',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('supports', true);
    }
}
exports.createSupportsTable1730121754250 = createSupportsTable1730121754250;
//# sourceMappingURL=1730121754250-create-support-table.js.map