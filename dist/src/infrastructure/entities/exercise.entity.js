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
exports.Exercises = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
let Exercises = class Exercises {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int4' }),
    __metadata("design:type", Number)
], Exercises.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Exercises.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Exercises.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar', }),
    __metadata("design:type", String)
], Exercises.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'timestamp', }),
    __metadata("design:type", Date)
], Exercises.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Categories, (categories) => categories),
    (0, typeorm_1.JoinColumn)({ name: 'category' }),
    __metadata("design:type", Number)
], Exercises.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Exercises.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Exercises.prototype, "updated_on", void 0);
Exercises = __decorate([
    (0, typeorm_1.Entity)()
], Exercises);
exports.Exercises = Exercises;
//# sourceMappingURL=exercise.entity.js.map