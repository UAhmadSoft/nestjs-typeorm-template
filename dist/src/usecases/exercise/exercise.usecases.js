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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseUseCases = void 0;
const common_1 = require("@nestjs/common");
const exercise_repository_1 = require("../../infrastructure/repository/exercise.repository");
let ExerciseUseCases = class ExerciseUseCases {
    constructor(exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }
    async createExercise(exerciseModel) {
        return await this.exerciseRepository.createExercise(exerciseModel);
    }
    async getExercise(id) {
        const data = await this.exerciseRepository.getExercise(id);
        if (!data) {
            throw new common_1.HttpException('Exercise Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getExercises(query = {}) {
        return await this.exerciseRepository.getExercises(query);
    }
    async updateExercise(id, exerciseUpdateModel) {
        return await this.exerciseRepository.updateExercise(id, exerciseUpdateModel);
    }
    async deleteExercise(id) {
        return await this.exerciseRepository.deleteExercise(id);
    }
};
ExerciseUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof exercise_repository_1.ExerciseRepository !== "undefined" && exercise_repository_1.ExerciseRepository) === "function" ? _a : Object])
], ExerciseUseCases);
exports.ExerciseUseCases = ExerciseUseCases;
//# sourceMappingURL=exercise.usecases.js.map