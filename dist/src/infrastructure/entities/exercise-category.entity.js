"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseCategories = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const exercise_entity_1 = require("./exercise.entity");
let ExerciseCategories = class ExerciseCategories {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'exercise_id' }),
    __metadata("design:type", Number)
], ExerciseCategories.prototype, "exerciseId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'category_id' }),
    __metadata("design:type", Number)
], ExerciseCategories.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_entity_1.Exercises, (exercise) => exercise.categories, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'exercise_id', referencedColumnName: 'id' }]),
    __metadata("design:type", Array)
], ExerciseCategories.prototype, "exercises", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Categories, (category) => category.exercises, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'category_id', referencedColumnName: 'id' }]),
    __metadata("design:type", Array)
], ExerciseCategories.prototype, "categorys", void 0);
ExerciseCategories = __decorate([
    (0, typeorm_1.Entity)()
], ExerciseCategories);
exports.ExerciseCategories = ExerciseCategories;
//# sourceMappingURL=exercise-category.entity.js.map