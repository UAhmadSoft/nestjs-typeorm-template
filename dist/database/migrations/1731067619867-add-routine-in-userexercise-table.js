"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRoutineUserExercisesTable1731067619867 = void 0;
const typeorm_1 = require("typeorm");
class AddRoutineUserExercisesTable1731067619867 {
    async up(queryRunner) {
        await queryRunner.addColumn('user_exercises', new typeorm_1.TableColumn({
            name: 'routine',
            type: 'int4',
            isNullable: true,
        }));
        await queryRunner.createForeignKeys('user_exercises', [
            new typeorm_1.TableForeignKey({
                name: 'user_exercises_routines_fk1',
                columnNames: ['routine'],
                referencedColumnNames: ['id'],
                referencedTableName: 'routines',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('user_exercises', 'routine');
        await queryRunner.dropForeignKey('user_exercises', 'user_exercises_routines_fk1');
    }
}
exports.AddRoutineUserExercisesTable1731067619867 = AddRoutineUserExercisesTable1731067619867;
//# sourceMappingURL=1731067619867-add-routine-in-userexercise-table.js.map