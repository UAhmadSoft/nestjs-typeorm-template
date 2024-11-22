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
exports.Coins = void 0;
const typeorm_1 = require("typeorm");
let Coins = class Coins {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int4' }),
    __metadata("design:type", Number)
], Coins.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Coins.prototype, "symbol", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Coins.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Coins.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Coins.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Coins.prototype, "depositable", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Coins.prototype, "withdrawable", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Coins.prototype, "exchangeable", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Coins.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Coins.prototype, "updated_on", void 0);
Coins = __decorate([
    (0, typeorm_1.Entity)()
], Coins);
exports.Coins = Coins;
//# sourceMappingURL=coin.entity.js.map