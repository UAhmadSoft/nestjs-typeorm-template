"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersTable1729782475408 = void 0;
const typeorm_1 = require("typeorm");
class createUsersTable1729782475408 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
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
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'signup_otp',
                    isNullable: true,
                    type: 'int',
                },
                {
                    name: 'signup_otp_expiry',
                    isNullable: true,
                    type: 'timestamp',
                },
                {
                    name: 'forget_email_otp',
                    isNullable: true,
                    type: 'int',
                },
                {
                    name: 'forget_email_otp_expiry',
                    isNullable: true,
                    type: 'timestamp',
                },
                {
                    name: 'agent_rera',
                    isNullable: true,
                    type: 'varchar',
                },
                {
                    name: 'is_social_login',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'is_email_verified',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'upcoming_email',
                    isNullable: true,
                    type: 'varchar',
                },
                {
                    name: 'upcoming_email_otp',
                    isNullable: true,
                    type: 'int',
                },
                {
                    name: 'upcoming_email_otp_expiry',
                    isNullable: true,
                    type: 'timestamp',
                },
                {
                    name: 'allow_notifications',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'is_active',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'is_banned',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'device',
                    type: 'int4',
                },
                ,
            ],
        }));
        await queryRunner.createForeignKeys('users', [new typeorm_1.TableForeignKey({
                name: 'users_devices_fk1',
                columnNames: ['device'],
                referencedColumnNames: ['id'],
                referencedTableName: 'devices',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('users', 'users_devices_fk1');
        await queryRunner.dropTable('users', true);
    }
}
exports.createUsersTable1729782475408 = createUsersTable1729782475408;
//# sourceMappingURL=1729782475408-create-user-table.js.map