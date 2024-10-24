"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevicesTable1729785604608 = void 0;
const typeorm_1 = require("typeorm");
class createDevicesTable1729785604608 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'devices',
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
                    name: 'device_id',
                    type: 'varchar',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('devices', true);
    }
}
exports.createDevicesTable1729785604608 = createDevicesTable1729785604608;
//# sourceMappingURL=1729785604608-create-device-table.js.map