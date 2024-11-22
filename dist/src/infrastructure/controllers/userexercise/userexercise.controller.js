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
exports.UserExerciseController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const userexercise_usecases_1 = require("../../../usecases/userexercise/userexercise.usecases");
const userexercise_dto_1 = require("./userexercise.dto");
let UserExerciseController = class UserExerciseController {
    constructor(userExerciseUseCases) {
        this.userExerciseUseCases = userExerciseUseCases;
    }
    createUserExercise(userExercise, req) {
        if (!req.user) {
            throw new common_1.UnauthorizedException('Unauthorized');
        }
        return this.userExerciseUseCases.createUserExercise(Object.assign(Object.assign({}, userExercise), { user: req.user.id }));
    }
    async getActiveStreak(req) {
        if (!req.user) {
            throw new common_1.UnauthorizedException('Unauthorized');
        }
        const active_streak = await this.userExerciseUseCases.getActiveStreak(req.user.id);
        const longest_streak = await this.userExerciseUseCases.getLongestExerciseStreak(req.user.id);
        const days_completed = await this.userExerciseUseCases.daysComplted(req.user.id);
        const percentage_duration = await this.userExerciseUseCases.getPercentageIncreaseInDuration(req.user.id);
        const todays_duration = await this.userExerciseUseCases.getTotalDurationForToday(req.user.id);
        return {
            percentage_duration,
            active_streak,
            days_completed,
            longest_streak,
            todays_duration,
        };
    }
    async getDailyExercisesSummary(req) {
        if (!req.user) {
            throw new common_1.UnauthorizedException('Unauthorized');
        }
        return this.userExerciseUseCases.getDailyExercisesSummary(req.user.id);
    }
    getUserExercise(id) {
        return this.userExerciseUseCases.getUserExercise(id);
    }
    getUserExercises() {
        return this.userExerciseUseCases.getUserExercises();
    }
    updateUserExercise(id, userExercise) {
        return this.userExerciseUseCases.updateUserExercise(id, userExercise);
    }
    deleteUserExercise(id) {
        return this.userExerciseUseCases.deleteUserExercise(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userexercise_dto_1.CreateUserExerciseDto, Object]),
    __metadata("design:returntype", void 0)
], UserExerciseController.prototype, "createUserExercise", null);
__decorate([
    (0, common_1.Get)('stats'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserExerciseController.prototype, "getActiveStreak", null);
__decorate([
    (0, common_1.Get)('history'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserExerciseController.prototype, "getDailyExercisesSummary", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserExerciseController.prototype, "getUserExercise", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserExerciseController.prototype, "getUserExercises", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, userexercise_dto_1.UpdateUserExerciseDto]),
    __metadata("design:returntype", void 0)
], UserExerciseController.prototype, "updateUserExercise", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserExerciseController.prototype, "deleteUserExercise", null);
UserExerciseController = __decorate([
    (0, common_1.Controller)('userexercises'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [userexercise_usecases_1.UserExerciseUseCases])
], UserExerciseController);
exports.UserExerciseController = UserExerciseController;
//# sourceMappingURL=userexercise.controller.js.map