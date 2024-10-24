"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExercisesTable1729785604651 = void 0;
const typeorm_1 = require("typeorm");
class createExercisesTable1729785604651 {
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
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('exercises', true);
    }
}
exports.createExercisesTable1729785604651 = createExercisesTable1729785604651;
//# sourceMappingURL=1729785604651-create-exercise-table.js.map