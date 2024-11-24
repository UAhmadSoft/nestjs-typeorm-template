"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConvertHistoryTable1732291036725 = void 0;
const typeorm_1 = require("typeorm");
class createConvertHistoryTable1732291036725 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'convert_historys',
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
                    name: 'symbol',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'orderId',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'clientOrderId',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'price',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'origQty',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'executedQty',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'type',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'side',
                    type: 'boolean',
                    default: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('convert_historys', true);
    }
}
exports.createConvertHistoryTable1732291036725 = createConvertHistoryTable1732291036725;
//# sourceMappingURL=1732291036725-create-converthistory-table.js.map