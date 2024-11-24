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
exports.DepositHistoryController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const deposithistory_usecases_1 = require("../../../usecases/deposithistory/deposithistory.usecases");
const deposithistory_dto_1 = require("./deposithistory.dto");
let DepositHistoryController = class DepositHistoryController {
    constructor(depositHistoryUseCases) {
        this.depositHistoryUseCases = depositHistoryUseCases;
    }
    createDepositHistory(depositHistory) {
        return this.depositHistoryUseCases.createDepositHistory(depositHistory);
    }
    getDepositHistory(id) {
        return this.depositHistoryUseCases.getDepositHistory(id);
    }
    getDepositHistory() {
        return this.depositHistoryUseCases.getDepositHistory();
    }
    updateDepositHistory(id, depositHistory) {
        return this.depositHistoryUseCases.updateDepositHistory(id, depositHistory);
    }
    deleteDepositHistory(id) {
        return this.depositHistoryUseCases.deleteDepositHistory(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deposithistory_dto_1.CreateDepositHistoryDto]),
    __metadata("design:returntype", void 0)
], DepositHistoryController.prototype, "createDepositHistory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepositHistoryController.prototype, "getDepositHistory", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepositHistoryController.prototype, "getDepositHistory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, deposithistory_dto_1.UpdateDepositHistoryDto]),
    __metadata("design:returntype", void 0)
], DepositHistoryController.prototype, "updateDepositHistory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepositHistoryController.prototype, "deleteDepositHistory", null);
DepositHistoryController = __decorate([
    (0, common_1.Controller)('deposithistorys'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [deposithistory_usecases_1.DepositHistoryUseCases])
], DepositHistoryController);
exports.DepositHistoryController = DepositHistoryController;
//# sourceMappingURL=deposithistory.controller.js.map