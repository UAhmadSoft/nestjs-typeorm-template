"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeExerciseRoutineToManyToMany1730296658803 = void 0;
const typeorm_1 = require("typeorm");
class ChangeExerciseRoutineToManyToMany1730296658803 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'routine_exercises',
            columns: [
                {
                    name: 'exercise_id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'routine_id',
                    type: 'int',
                    isPrimary: true,
                },
            ],
        }), true);
        await queryRunner.createForeignKey('routine_exercises', new typeorm_1.TableForeignKey({
            columnNames: ['exercise_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'exercises',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('routine_exercises', new typeorm_1.TableForeignKey({
            columnNames: ['routine_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'routines',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('routine_exercises', 'exercise_id');
        await queryRunner.dropForeignKey('routine_exercises', 'routine_id');
        await queryRunner.dropTable('routine_exercises');
    }
}
exports.ChangeExerciseRoutineToManyToMany1730296658803 = ChangeExerciseRoutineToManyToMany1730296658803;
//# sourceMappingURL=1730296658802-change-exercise-routine-to-many-to-many.js.map