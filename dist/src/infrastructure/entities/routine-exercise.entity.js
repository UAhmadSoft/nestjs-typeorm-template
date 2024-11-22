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
exports.RoutineExercises = void 0;
const typeorm_1 = require("typeorm");
const exercise_entity_1 = require("./exercise.entity");
const routine_entity_1 = require("./routine.entity");
let RoutineExercises = class RoutineExercises {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'exercise_id', type: 'int' }),
    __metadata("design:type", Number)
], RoutineExercises.prototype, "exerciseId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'routine_id', type: 'int' }),
    __metadata("design:type", Number)
], RoutineExercises.prototype, "routineId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_entity_1.Exercises, (exercise) => exercise.routineExercises, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'exercise_id' }),
    __metadata("design:type", exercise_entity_1.Exercises)
], RoutineExercises.prototype, "exercise", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => routine_entity_1.Routines, (routine) => routine.routineExercises, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'routine_id' }),
    __metadata("design:type", routine_entity_1.Routines)
], RoutineExercises.prototype, "routine", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'int', default: 30 }),
    __metadata("design:type", Number)
], RoutineExercises.prototype, "duration", void 0);
RoutineExercises = __decorate([
    (0, typeorm_1.Entity)('routine_exercises')
], RoutineExercises);
exports.RoutineExercises = RoutineExercises;
//# sourceMappingURL=routine-exercise.entity.js.map