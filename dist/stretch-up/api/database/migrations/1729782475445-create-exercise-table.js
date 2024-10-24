"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExercisesTable1729782475445 = void 0;
const typeorm_1 = require("typeorm");
class createExercisesTable1729782475445 {
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
                }, {
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
                    name: 'deal',
                    type: 'int4',
                },
                ,
            ],
        }));
        await queryRunner.createForeignKeys('exercises', [new typeorm_1.TableForeignKey({
                name: 'exercises_categories_fk1',
                columnNames: ['deal'],
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
exports.createExercisesTable1729782475445 = createExercisesTable1729782475445;
//# sourceMappingURL=1729782475445-create-exercise-table.js.map