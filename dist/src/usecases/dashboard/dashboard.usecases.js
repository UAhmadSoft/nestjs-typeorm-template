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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardUseCases = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../infrastructure/repository/user.repository");
const exercise_repository_1 = require("src/infrastructure/repository/exercise.repository");
const routine_repository_1 = require("src/infrastructure/repository/routine.repository");
const support_repository_1 = require("src/infrastructure/repository/support.repository");
let DashboardUseCases = class DashboardUseCases {
    constructor(usersRepository, exercoseRepository, supportRepository, routinesRepository) {
        this.usersRepository = usersRepository;
        this.exercoseRepository = exercoseRepository;
        this.supportRepository = supportRepository;
        this.routinesRepository = routinesRepository;
    }
    async getStats() {
        const usersCount = await this.usersRepository.getUsersCount();
        const exercisesCount = await this.exercoseRepository.getExercisesCount();
        const routinesCount = await this.routinesRepository.getRoutinesCount();
        const supportCount = await this.supportRepository.getSupportsCount();
        return {
            usersCount,
            exercisesCount,
            routinesCount,
            supportCount,
        };
    }
    async getDefaultRoutine() {
        const defaultRoutine = await this.routinesRepository.getDefaultRoutine();
        return defaultRoutine;
    }
    async getRecommendedRoutines(userId) {
        const defaultRoutine = await this.routinesRepository.getRecommendedRoutines(userId);
        return defaultRoutine;
    }
    async getTopExercises() {
        const topExercises = await this.exercoseRepository.getTopExercisesByDurationThisMonth();
        return topExercises;
    }
    async getGraphsData() {
        const exercisesCountPerCategory = await this.exercoseRepository.getExercisesCountPerCategory();
        const exercisesCountPerArea = await this.exercoseRepository.getExercisesCountPerArea();
        const routinesCountPerCategory = await this.routinesRepository.getRoutinesCountPerCategory();
        const routinesCountPerArea = await this.routinesRepository.getRoutinesCountPerArea();
        return {
            exercisesCountPerCategory,
            exercisesCountPerArea,
            routinesCountPerCategory,
            routinesCountPerArea,
        };
    }
};
DashboardUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, typeof (_a = typeof exercise_repository_1.ExerciseRepository !== "undefined" && exercise_repository_1.ExerciseRepository) === "function" ? _a : Object, typeof (_b = typeof support_repository_1.SupportRepository !== "undefined" && support_repository_1.SupportRepository) === "function" ? _b : Object, typeof (_c = typeof routine_repository_1.RoutineRepository !== "undefined" && routine_repository_1.RoutineRepository) === "function" ? _c : Object])
], DashboardUseCases);
exports.DashboardUseCases = DashboardUseCases;
//# sourceMappingURL=dashboard.usecases.js.map