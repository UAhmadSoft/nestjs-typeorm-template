"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyDescriptionColumn1730296658803 = void 0;
const typeorm_1 = require("typeorm");
class modifyDescriptionColumn1730296658803 {
    async up(queryRunner) {
        await queryRunner.changeColumn('user_preferences', new typeorm_1.TableColumn({
            name: 'description',
            type: 'varchar',
            isNullable: false,
        }), new typeorm_1.TableColumn({
            name: 'description',
            type: 'varchar',
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.changeColumn('user_preferences', new typeorm_1.TableColumn({
            name: 'description',
            type: 'varchar',
            isNullable: true,
        }), new typeorm_1.TableColumn({
            name: 'description',
            type: 'varchar',
            isNullable: false,
        }));
    }
}
exports.modifyDescriptionColumn1730296658803 = modifyDescriptionColumn1730296658803;
//# sourceMappingURL=1730296658803-modify-description-column.js.map