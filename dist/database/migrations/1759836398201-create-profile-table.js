"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfilesTable1759836398201 = void 0;
const typeorm_1 = require("typeorm");
class createProfilesTable1759836398201 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'profiles',
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
                    name: 'first_name',
                    isNullable: true,
                    type: 'varchar',
                },
                {
                    name: 'last_name',
                    isNullable: true,
                    type: 'varchar',
                },
                {
                    name: 'image_url',
                    isNullable: true,
                    type: 'varchar',
                },
                {
                    name: 'user',
                    type: 'int4',
                },
            ],
        }));
        await queryRunner.createForeignKeys('profiles', [
            new typeorm_1.TableForeignKey({
                name: 'profiles_users_fk1',
                columnNames: ['user'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('profiles', 'profiles_users_fk1');
        await queryRunner.dropTable('profiles', true);
    }
}
exports.createProfilesTable1759836398201 = createProfilesTable1759836398201;
//# sourceMappingURL=1759836398201-create-profile-table.js.map