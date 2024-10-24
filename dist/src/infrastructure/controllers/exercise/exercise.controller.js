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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const exercise_usecases_1 = require("../../../usecases/exercise/exercise.usecases");
const exercise_dto_1 = require("./exercise.dto");
let ExerciseController = class ExerciseController {
    constructor(exerciseUseCases) {
        this.exerciseUseCases = exerciseUseCases;
    }
    createExercise(exercise) {
        return this.exerciseUseCases.createExercise(exercise);
    }
    getExercise(id) {
        return this.exerciseUseCases.getExercise(id);
    }
    getExercises() {
        return this.exerciseUseCases.getExercises();
    }
    updateExercise(id, exercise) {
        return this.exerciseUseCases.updateExercise(id, exercise);
    }
    deleteExercise(id) {
        return this.exerciseUseCases.deleteExercise(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exercise_dto_1.CreateExerciseDto]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "createExercise", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "getExercise", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "getExercises", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, exercise_dto_1.UpdateExerciseDto]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "updateExercise", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "deleteExercise", null);
ExerciseController = __decorate([
    (0, common_1.Controller)('exercises'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [exercise_usecases_1.ExerciseUseCases])
], ExerciseController);
exports.ExerciseController = ExerciseController;
//# sourceMappingURL=exercise.controller.js.map