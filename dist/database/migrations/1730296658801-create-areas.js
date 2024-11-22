"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAreaEnumToExercises1730296658801 = void 0;
class AddAreaEnumToExercises1730296658801 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TYPE "area_enum" AS ENUM('Hips', 'Lower back', 'Hamstrings',
            'Chest', 'Lower Body', 'Core', 'Upper Body', 'Quadriceps', 'Neck', 'Shoulders')
        `);
        await queryRunner.query(`
            ALTER TABLE "exercises"
            ALTER COLUMN "area"
            TYPE "area_enum"
            USING "area"::text::"area_enum"
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "exercises"
            ALTER COLUMN "area"
            TYPE VARCHAR(255)
            USING "area"::text
        `);
        await queryRunner.query(`
            DROP TYPE "area_enum"
        `);
    }
}
exports.AddAreaEnumToExercises1730296658801 = AddAreaEnumToExercises1730296658801;
//# sourceMappingURL=1730296658801-create-areas.js.map