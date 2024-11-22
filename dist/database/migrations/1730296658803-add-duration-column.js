"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDurationColumn1730296658804 = void 0;
const typeorm_1 = require("typeorm");
class AddDurationColumn1730296658804 {
    async up(queryRunner) {
        await queryRunner.addColumn('routine_exercises', new typeorm_1.TableColumn({
            name: 'duration',
            type: 'int',
            isNullable: true,
            default: 30,
        }));
        await queryRunner.addColumn('exercises', new typeorm_1.TableColumn({
            name: 'duration',
            type: 'int',
            isNullable: true,
            default: 30,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('routine_exercises', 'duration');
        await queryRunner.dropColumn('exercises', 'duration');
    }
}
exports.AddDurationColumn1730296658804 = AddDurationColumn1730296658804;
//# sourceMappingURL=1730296658803-add-duration-column.js.map