"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransferHistoryTable1732291036729 = void 0;
const typeorm_1 = require("typeorm");
class createTransferHistoryTable1732291036729 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'transfer_historys',
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
                    name: 'asset',
                    type: 'varchar',
                },
                {
                    name: 'network',
                    type: 'varchar',
                },
                {
                    name: 'network_fee',
                    type: 'varchar',
                },
                {
                    name: 'amount',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'destination',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'status',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'txid',
                    type: 'boolean',
                    default: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('transfer_historys', true);
    }
}
exports.createTransferHistoryTable1732291036729 = createTransferHistoryTable1732291036729;
//# sourceMappingURL=1732291036729-create-transferhistory-table.js.map