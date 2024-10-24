"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevicesTable1729782475401 = void 0;
const typeorm_1 = require("typeorm");
class createDevicesTable1729782475401 {
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
                }, {
                    name: 'device_id',
                    type: 'string',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('devices', true);
    }
}
exports.createDevicesTable1729782475401 = createDevicesTable1729782475401;
//# sourceMappingURL=1729782475401-create-device-table.js.map