"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoriesTable1729785604647 = void 0;
const typeorm_1 = require("typeorm");
class createCategoriesTable1729785604647 {
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
                },
                {
                    name: 'title',
                    type: 'varchar',
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
exports.createCategoriesTable1729785604647 = createCategoriesTable1729785604647;
//# sourceMappingURL=1729785604647-create-category-table.js.map