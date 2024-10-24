"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoriesTable1729782445675 = void 0;
const typeorm_1 = require("typeorm");
class createCategoriesTable1729782445675 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'categories',
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
                }, {
                    name: 'title',
                    type: 'string',
                },
                {
                    name: 'image',
                    type: 'varchar',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('categories', true);
    }
}
exports.createCategoriesTable1729782445675 = createCategoriesTable1729782445675;
//# sourceMappingURL=1729782445675-create-category-table.js.map