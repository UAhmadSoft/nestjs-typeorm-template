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
exports.Supports = void 0;
const typeorm_1 = require("typeorm");
let Supports = class Supports {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int4' }),
    __metadata("design:type", Number)
], Supports.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Supports.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Supports.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Supports.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Supports.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Supports.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Supports.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Supports.prototype, "updated_on", void 0);
Supports = __decorate([
    (0, typeorm_1.Entity)()
], Supports);
exports.Supports = Supports;
//# sourceMappingURL=support.entity.js.map