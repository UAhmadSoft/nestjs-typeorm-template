"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfilesTable1729782445669 = void 0;
const typeorm_1 = require("typeorm");
class createProfilesTable1729782445669 {
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
                }, {
                    name: 'fullname',
                    isNullable: true,
                    type: 'varchar',
                },
                {
                    name: 'reminder_time',
                    isNullable: true,
                    type: 'time',
                },
                {
                    name: 'flexibility_level',
                    isNullable: true,
                    type: 'simple-array',
                },
                {
                    name: 'stretching_time',
                    isNullable: true,
                    type: 'simple-array',
                },
                {
                    name: 'goal',
                    isNullable: true,
                    type: 'simple-array',
                },
                {
                    name: 'discomfort_areas',
                    isNullable: true,
                    type: 'simple-array',
                },
                {
                    name: 'user',
                    type: 'int4',
                },
                ,
            ],
        }));
        await queryRunner.createForeignKeys('profiles', [new typeorm_1.TableForeignKey({
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
exports.createProfilesTable1729782445669 = createProfilesTable1729782445669;
//# sourceMappingURL=1729782445669-create-profile-table.js.map