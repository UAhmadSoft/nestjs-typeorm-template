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
exports.ConvertHistoryController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const converthistory_usecases_1 = require("../../../usecases/converthistory/converthistory.usecases");
const converthistory_dto_1 = require("./converthistory.dto");
let ConvertHistoryController = class ConvertHistoryController {
    constructor(convertHistoryUseCases) {
        this.convertHistoryUseCases = convertHistoryUseCases;
    }
    createConvertHistory(convertHistory) {
        return this.convertHistoryUseCases.createConvertHistory(convertHistory);
    }
    updateConvertHistory(id, convertHistory) {
        return this.convertHistoryUseCases.updateConvertHistory(id, convertHistory);
    }
    deleteConvertHistory(id) {
        return this.convertHistoryUseCases.deleteConvertHistory(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [converthistory_dto_1.CreateConvertHistoryDto]),
    __metadata("design:returntype", void 0)
], ConvertHistoryController.prototype, "createConvertHistory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, converthistory_dto_1.UpdateConvertHistoryDto]),
    __metadata("design:returntype", void 0)
], ConvertHistoryController.prototype, "updateConvertHistory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConvertHistoryController.prototype, "deleteConvertHistory", null);
ConvertHistoryController = __decorate([
    (0, common_1.Controller)('converthistorys'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [converthistory_usecases_1.ConvertHistoryUseCases])
], ConvertHistoryController);
exports.ConvertHistoryController = ConvertHistoryController;
//# sourceMappingURL=converthistory.controller.js.map