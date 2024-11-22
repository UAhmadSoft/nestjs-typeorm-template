"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addeDeviceAndUserIdColumn1730296658803 = void 0;
const typeorm_1 = require("typeorm");
class addeDeviceAndUserIdColumn1730296658803 {
    async up(queryRunner) {
        await queryRunner.addColumn('user_preferences_responses', new typeorm_1.TableColumn({
            name: 'device_id',
            type: 'varchar',
            isNullable: false,
        }));
        await queryRunner.addColumn('user_preferences_responses', new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'int4',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('user_preferences_responses', new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('user_preferences_responses', 'device_id');
        await queryRunner.dropColumn('user_preferences_responses', 'user_id');
    }
}
exports.addeDeviceAndUserIdColumn1730296658803 = addeDeviceAndUserIdColumn1730296658803;
//# sourceMappingURL=1730296658803-add-device-id.js.map