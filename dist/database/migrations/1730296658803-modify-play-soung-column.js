"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyPlaySoungColumn1730296658803 = void 0;
class modifyPlaySoungColumn1730296658803 {
    async up(queryRunner) {
        await queryRunner.renameColumn('routines', 'play_soung', 'play_sound');
    }
    async down(queryRunner) {
        await queryRunner.renameColumn('routines', 'play_sound', 'play_soung');
    }
}
exports.modifyPlaySoungColumn1730296658803 = modifyPlaySoungColumn1730296658803;
//# sourceMappingURL=1730296658803-modify-play-soung-column.js.map