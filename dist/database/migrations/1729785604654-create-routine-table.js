"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutinesTable1729785604654 = void 0;
const typeorm_1 = require("typeorm");
class createRoutinesTable1729785604654 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'routines',
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
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'time',
                    type: 'int',
                },
                {
                    name: 'play_soung',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'time_delay',
                    type: 'int',
                },
                {
                    name: 'user',
                    type: 'int4',
                    isNullable: true,
                    default: null,
                },
            ],
        }));
        await queryRunner.createForeignKeys('routines', [
            new typeorm_1.TableForeignKey({
                name: 'routines_exercises_fk1',
                columnNames: ['user'],
                referencedColumnNames: ['id'],
                referencedTableName: 'exercises',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('routines', 'routines_exercises_fk1');
        await queryRunner.dropTable('routines', true);
    }
}
exports.createRoutinesTable1729785604654 = createRoutinesTable1729785604654;
//# sourceMappingURL=1729785604654-create-routine-table.js.map