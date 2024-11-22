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
exports.Routines = void 0;
const typeorm_1 = require("typeorm");
const exercise_entity_1 = require("./exercise.entity");
const routine_exercise_entity_1 = require("./routine-exercise.entity");
let Routines = class Routines {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int4' }),
    __metadata("design:type", Number)
], Routines.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Routines.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Routines.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Routines.prototype, "play_sound", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Routines.prototype, "time_delay", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => routine_exercise_entity_1.RoutineExercises, (routineExercise) => routineExercise.routine),
    __metadata("design:type", Array)
], Routines.prototype, "routineExercises", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_entity_1.Exercises, (exercises) => exercises, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    __metadata("design:type", Number)
], Routines.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Routines.prototype, "created_on", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Routines.prototype, "updated_on", void 0);
Routines = __decorate([
    (0, typeorm_1.Entity)()
], Routines);
exports.Routines = Routines;
//# sourceMappingURL=routine.entity.js.map