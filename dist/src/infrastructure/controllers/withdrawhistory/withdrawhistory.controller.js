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
exports.WithdrawHistoryController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const withdrawhistory_usecases_1 = require("../../../usecases/withdrawhistory/withdrawhistory.usecases");
const withdrawhistory_dto_1 = require("./withdrawhistory.dto");
let WithdrawHistoryController = class WithdrawHistoryController {
    constructor(withdrawHistoryUseCases) {
        this.withdrawHistoryUseCases = withdrawHistoryUseCases;
    }
    createWithdrawHistory(withdrawHistory) {
        return this.withdrawHistoryUseCases.createWithdrawHistory(withdrawHistory);
    }
    getWithdrawHistory(id) {
        return this.withdrawHistoryUseCases.getWithdrawHistory(id);
    }
    getWithdrawHistory() {
        return this.withdrawHistoryUseCases.getWithdrawHistory();
    }
    updateWithdrawHistory(id, withdrawHistory) {
        return this.withdrawHistoryUseCases.updateWithdrawHistory(id, withdrawHistory);
    }
    deleteWithdrawHistory(id) {
        return this.withdrawHistoryUseCases.deleteWithdrawHistory(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [withdrawhistory_dto_1.CreateWithdrawHistoryDto]),
    __metadata("design:returntype", void 0)
], WithdrawHistoryController.prototype, "createWithdrawHistory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WithdrawHistoryController.prototype, "getWithdrawHistory", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WithdrawHistoryController.prototype, "getWithdrawHistory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, withdrawhistory_dto_1.UpdateWithdrawHistoryDto]),
    __metadata("design:returntype", void 0)
], WithdrawHistoryController.prototype, "updateWithdrawHistory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WithdrawHistoryController.prototype, "deleteWithdrawHistory", null);
WithdrawHistoryController = __decorate([
    (0, common_1.Controller)('withdrawhistorys'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [withdrawhistory_usecases_1.WithdrawHistoryUseCases])
], WithdrawHistoryController);
exports.WithdrawHistoryController = WithdrawHistoryController;
//# sourceMappingURL=withdrawhistory.controller.js.map