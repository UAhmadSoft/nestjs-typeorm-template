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
exports.TransferHistoryController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const transferhistory_usecases_1 = require("../../../usecases/transferhistory/transferhistory.usecases");
const transferhistory_dto_1 = require("./transferhistory.dto");
let TransferHistoryController = class TransferHistoryController {
    constructor(transferHistoryUseCases) {
        this.transferHistoryUseCases = transferHistoryUseCases;
    }
    createTransferHistory(transferHistory) {
        return this.transferHistoryUseCases.createTransferHistory(transferHistory);
    }
    getTransferHistory(id) {
        return this.transferHistoryUseCases.getTransferHistory(id);
    }
    getTransferHistory() {
        return this.transferHistoryUseCases.getTransferHistory();
    }
    updateTransferHistory(id, transferHistory) {
        return this.transferHistoryUseCases.updateTransferHistory(id, transferHistory);
    }
    deleteTransferHistory(id) {
        return this.transferHistoryUseCases.deleteTransferHistory(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transferhistory_dto_1.CreateTransferHistoryDto]),
    __metadata("design:returntype", void 0)
], TransferHistoryController.prototype, "createTransferHistory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransferHistoryController.prototype, "getTransferHistory", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransferHistoryController.prototype, "getTransferHistory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferhistory_dto_1.UpdateTransferHistoryDto]),
    __metadata("design:returntype", void 0)
], TransferHistoryController.prototype, "updateTransferHistory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransferHistoryController.prototype, "deleteTransferHistory", null);
TransferHistoryController = __decorate([
    (0, common_1.Controller)('transferhistorys'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [transferhistory_usecases_1.TransferHistoryUseCases])
], TransferHistoryController);
exports.TransferHistoryController = TransferHistoryController;
//# sourceMappingURL=transferhistory.controller.js.map