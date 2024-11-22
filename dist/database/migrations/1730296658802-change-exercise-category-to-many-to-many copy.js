"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeExerciseCategoryToManyToMany1730296658802 = void 0;
const typeorm_1 = require("typeorm");
class ChangeExerciseCategoryToManyToMany1730296658802 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'exercise_categories',
            columns: [
                {
                    name: 'exercise_id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'category_id',
                    type: 'int',
                    isPrimary: true,
                },
            ],
        }), true);
        await queryRunner.createForeignKey('exercise_categories', new typeorm_1.TableForeignKey({
            columnNames: ['exercise_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'exercises',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('exercise_categories', new typeorm_1.TableForeignKey({
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'CASCADE',
        }));
        const table = await queryRunner.getTable('exercises');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('category') !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey('exercises', foreignKey);
        }
        await queryRunner.dropColumn('exercises', 'category');
    }
    async down(queryRunner) {
        await queryRunner.addColumn('exercises', new typeorm_1.TableColumn({
            name: 'category_id',
            type: 'int',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('exercises', new typeorm_1.TableForeignKey({
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'SET NULL',
        }));
        await queryRunner.dropTable('exercise_categories');
    }
}
exports.ChangeExerciseCategoryToManyToMany1730296658802 = ChangeExerciseCategoryToManyToMany1730296658802;
//# sourceMappingURL=1730296658802-change-exercise-category-to-many-to-many%20copy.js.map