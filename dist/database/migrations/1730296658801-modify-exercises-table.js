"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyExercisesTable1730296658801 = void 0;
const typeorm_1 = require("typeorm");
class modifyExercisesTable1730296658801 {
    async up(queryRunner) {
        await queryRunner.addColumns('exercises', [
            new typeorm_1.TableColumn({
                name: 'instructions',
                type: 'varchar',
                default: null,
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'benefits',
                type: 'varchar',
            }),
            new typeorm_1.TableColumn({
                name: 'caution',
                type: 'varchar',
                default: null,
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'thumbnail',
                type: 'varchar',
            }),
        ]);
        await queryRunner.dropColumns('exercises', ['description']);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns('exercises', [
            'instructions',
            'benefits',
            'caution',
            'thumbnail',
        ]);
        await queryRunner.addColumns('exercises', [
            new typeorm_1.TableColumn({
                name: 'description',
                type: 'varchar',
            }),
        ]);
    }
}
exports.modifyExercisesTable1730296658801 = modifyExercisesTable1730296658801;
//# sourceMappingURL=1730296658801-modify-exercises-table.js.map