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
exports.RoutineController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const routine_usecases_1 = require("../../../usecases/routine/routine.usecases");
const routine_dto_1 = require("./routine.dto");
let RoutineController = class RoutineController {
    constructor(routineUseCases) {
        this.routineUseCases = routineUseCases;
    }
    createRoutine(routine) {
        return this.routineUseCases.createRoutine(routine);
    }
    getRoutine(id) {
        return this.routineUseCases.getRoutine(id);
    }
    getRoutines() {
        return this.routineUseCases.getRoutines();
    }
    updateRoutine(id, routine) {
        return this.routineUseCases.updateRoutine(id, routine);
    }
    deleteRoutine(id) {
        return this.routineUseCases.deleteRoutine(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [routine_dto_1.CreateRoutineDto]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "createRoutine", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "getRoutine", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "getRoutines", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, routine_dto_1.UpdateRoutineDto]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "updateRoutine", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoutineController.prototype, "deleteRoutine", null);
RoutineController = __decorate([
    (0, common_1.Controller)('routines'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [routine_usecases_1.RoutineUseCases])
], RoutineController);
exports.RoutineController = RoutineController;
//# sourceMappingURL=routine.controller.js.map