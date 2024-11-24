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
exports.TransferHistory = void 0;
const typeorm_1 = require("typeorm");
let TransferHistory = class TransferHistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int4' }),
    __metadata("design:type", Number)
], TransferHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], TransferHistory.prototype, "asset", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], TransferHistory.prototype, "network", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], TransferHistory.prototype, "network_fee", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], TransferHistory.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], TransferHistory.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], TransferHistory.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], TransferHistory.prototype, "txid", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], TransferHistory.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], TransferHistory.prototype, "updated_on", void 0);
TransferHistory = __decorate([
    (0, typeorm_1.Entity)()
], TransferHistory);
exports.TransferHistory = TransferHistory;
//# sourceMappingURL=transferhistory.entity.js.map