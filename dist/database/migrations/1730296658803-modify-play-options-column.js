"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyPlayOptionsColumn1730296658803 = void 0;
class modifyPlayOptionsColumn1730296658803 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE user_preferences ALTER COLUMN options SET DATA TYPE text[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE user_preferences ALTER COLUMN options SET DATA TYPE text`);
    }
}
exports.modifyPlayOptionsColumn1730296658803 = modifyPlayOptionsColumn1730296658803;
//# sourceMappingURL=1730296658803-modify-play-options-column.js.map