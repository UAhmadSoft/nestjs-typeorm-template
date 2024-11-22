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
exports.UserExerciseUseCases = void 0;
const common_1 = require("@nestjs/common");
const userexercise_repository_1 = require("../../infrastructure/repository/userexercise.repository");
let UserExerciseUseCases = class UserExerciseUseCases {
    constructor(userExerciseRepository) {
        this.userExerciseRepository = userExerciseRepository;
    }
    async createUserExercise(userExerciseModel) {
        return await this.userExerciseRepository.createUserExercise(userExerciseModel);
    }
    async getActiveStreak(userId) {
        return await this.userExerciseRepository.getActiveStrikeOfUsualExercises(userId);
    }
    async getLongestExerciseStreak(userId) {
        return await this.userExerciseRepository.getLongestExerciseStreak(userId);
    }
    async daysComplted(userId) {
        return await this.userExerciseRepository.daysComplted(userId);
    }
    async getDailyExercisesSummary(userId) {
        return await this.userExerciseRepository.getDailyExercisesSummary(userId);
    }
    async getTotalDurationForToday(userId) {
        return await this.userExerciseRepository.getTotalDurationForToday(userId);
    }
    async getPercentageIncreaseInDuration(userId) {
        return await this.userExerciseRepository.getPercentageIncreaseInDuration(userId);
    }
    async getUserExercise(id) {
        const data = await this.userExerciseRepository.getUserExercise(id);
        if (!data) {
            throw new common_1.HttpException('UserExercise Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getUserExercises() {
        return await this.userExerciseRepository.getUserExercises();
    }
    async updateUserExercise(id, userExerciseUpdateModel) {
        return await this.userExerciseRepository.updateUserExercise(id, userExerciseUpdateModel);
    }
    async deleteUserExercise(id) {
        return await this.userExerciseRepository.deleteUserExercise(id);
    }
};
UserExerciseUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof userexercise_repository_1.UserExerciseRepository !== "undefined" && userexercise_repository_1.UserExerciseRepository) === "function" ? _a : Object])
], UserExerciseUseCases);
exports.UserExerciseUseCases = UserExerciseUseCases;
//# sourceMappingURL=userexercise.usecases.js.map