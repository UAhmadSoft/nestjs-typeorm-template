"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserExercisesTable1731067619866 = void 0;
const typeorm_1 = require("typeorm");
class createUserExercisesTable1731067619866 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_exercises',
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
                    name: 'duration',
                    type: 'int4',
                },
                {
                    name: 'user',
                    type: 'int4',
                },
                {
                    name: 'exercise',
                    type: 'int4',
                },
            ],
        }));
        await queryRunner.createForeignKeys('user_exercises', [
            new typeorm_1.TableForeignKey({
                name: 'user_exercises_users_fk1',
                columnNames: ['user'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            new typeorm_1.TableForeignKey({
                name: 'user_exercises_exercises_fk2',
                columnNames: ['exercise'],
                referencedColumnNames: ['id'],
                referencedTableName: 'exercises',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('user_exercises', 'user_exercises_users_fk1');
        await queryRunner.dropForeignKey('user_exercises', 'user_exercises_exercises_fk2');
        await queryRunner.dropTable('user_exercises', true);
    }
}
exports.createUserExercisesTable1731067619866 = createUserExercisesTable1731067619866;
//# sourceMappingURL=1731067619866-create-userexercise-table.js.map