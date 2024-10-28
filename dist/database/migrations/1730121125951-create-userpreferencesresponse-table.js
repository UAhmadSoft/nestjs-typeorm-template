"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPreferencesResponsesTable1730121125951 = void 0;
const typeorm_1 = require("typeorm");
class createUserPreferencesResponsesTable1730121125951 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_preferences_responses',
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
                    name: 'options',
                    type: 'varchar',
                    isArray: true,
                },
                {
                    name: 'user_preference',
                    type: 'int4',
                },
            ],
        }));
        await queryRunner.createForeignKeys('user_preferences_responses', [
            new typeorm_1.TableForeignKey({
                name: 'user_preferences_responses_user_preferences_fk1',
                columnNames: ['user_preference'],
                referencedColumnNames: ['id'],
                referencedTableName: 'user_preferences',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('user_preferences_responses', 'user_preferences_responses_user_preferences_fk1');
        await queryRunner.dropTable('user_preferences_responses', true);
    }
}
exports.createUserPreferencesResponsesTable1730121125951 = createUserPreferencesResponsesTable1730121125951;
//# sourceMappingURL=1730121125951-create-userpreferencesresponse-table.js.map