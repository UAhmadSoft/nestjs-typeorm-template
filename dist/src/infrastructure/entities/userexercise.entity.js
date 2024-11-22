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
exports.UserExercises = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const exercise_entity_1 = require("./exercise.entity");
let UserExercises = class UserExercises {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int4' }),
    __metadata("design:type", Number)
], UserExercises.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'int4' }),
    __metadata("design:type", Number)
], UserExercises.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Users, (users) => users),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    __metadata("design:type", Number)
], UserExercises.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_entity_1.Exercises, (exercises) => exercises),
    (0, typeorm_1.JoinColumn)({ name: 'exercise' }),
    __metadata("design:type", Number)
], UserExercises.prototype, "exercise", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_entity_1.Exercises, (exercises) => exercises),
    (0, typeorm_1.JoinColumn)({ name: 'routine' }),
    __metadata("design:type", Number)
], UserExercises.prototype, "routine", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], UserExercises.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], UserExercises.prototype, "updated_on", void 0);
UserExercises = __decorate([
    (0, typeorm_1.Entity)()
], UserExercises);
exports.UserExercises = UserExercises;
//# sourceMappingURL=userexercise.entity.js.map