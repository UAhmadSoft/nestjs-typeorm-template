"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExercisesTable1729785604648 = void 0;
const typeorm_1 = require("typeorm");
class createExercisesTable1729785604648 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'exercises',
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
                    name: 'image',
                    type: 'varchar',
                },
                {
                    name: 'area',
                    type: 'timestamp',
                },
                {
                    name: 'category',
                    type: 'int4',
                    isNullable: true,
                    default: null,
                },
            ],
        }));
        await queryRunner.createForeignKeys('exercises', [
            new typeorm_1.TableForeignKey({
                name: 'exercises_categories_fk1',
                columnNames: ['category'],
                referencedColumnNames: ['id'],
                referencedTableName: 'categories',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('exercises', 'exercises_categories_fk1');
        await queryRunner.dropTable('exercises', true);
    }
}
exports.createExercisesTable1729785604648 = createExercisesTable1729785604648;
//# sourceMappingURL=1729785604648-create-exercise-table.js.map