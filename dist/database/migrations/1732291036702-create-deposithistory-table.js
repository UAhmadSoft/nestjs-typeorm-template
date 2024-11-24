"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDepositHistoryTable1732291036702 = void 0;
const typeorm_1 = require("typeorm");
class createDepositHistoryTable1732291036702 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'deposit_historys',
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
        await queryRunner.dropTable('deposit_historys', true);
    }
}
exports.createDepositHistoryTable1732291036702 = createDepositHistoryTable1732291036702;
//# sourceMappingURL=1732291036702-create-deposithistory-table.js.map