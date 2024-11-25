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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositHistoryController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const deposithistory_usecases_1 = require("../../../usecases/deposithistory/deposithistory.usecases");
let DepositHistoryController = class DepositHistoryController {
    constructor(depositHistoryUseCases) {
        this.depositHistoryUseCases = depositHistoryUseCases;
    }
};
DepositHistoryController = __decorate([
    (0, common_1.Controller)('deposithistorys'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [deposithistory_usecases_1.DepositHistoryUseCases])
], DepositHistoryController);
exports.DepositHistoryController = DepositHistoryController;
//# sourceMappingURL=deposithistory.controller.js.map