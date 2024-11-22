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
exports.RoutineRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const routine_entity_1 = require("../entities/routine.entity");
const routine_exercise_entity_1 = require("../entities/routine-exercise.entity");
const userexercise_entity_1 = require("../entities/userexercise.entity");
let RoutineRepository = class RoutineRepository {
    constructor(routineRepository, routineExercisesRepository, userExercisesRepository) {
        this.routineRepository = routineRepository;
        this.routineExercisesRepository = routineExercisesRepository;
        this.userExercisesRepository = userExercisesRepository;
    }
    async getRoutinesCount() {
        return await this.routineRepository.count();
    }
    async getDefaultRoutine() {
        return await this.routineRepository.find({
            take: 1,
            relations: ['routineExercises', 'routineExercises.exercise'],
        });
    }
    async getRoutinesCountPerCategory() {
        return await this.routineRepository.query(`SELECT
        c.title,
        COUNT(DISTINCT r.id) AS count
      FROM
        categories c
      LEFT JOIN exercise_categories ec ON ec.category_id = c.id
      LEFT JOIN exercises e ON e.id = ec.exercise_id
      LEFT JOIN routine_exercises re ON re.exercise_id = e.id
      LEFT JOIN routines r ON r.id = re.routine_id
      GROUP BY
        c.id, c.title
      ORDER BY
        c.title;
  `);
    }
    async getRoutinesCountPerArea() {
        const queryBuilder = this.routineRepository.createQueryBuilder('routine');
        queryBuilder.leftJoin('routine.routineExercises', 'routineExercises');
        queryBuilder.leftJoin('routineExercises.exercise', 'exercises');
        queryBuilder.select('exercises.area, COUNT(*) as count');
        queryBuilder.groupBy('exercises.area');
        return await queryBuilder.getRawMany();
    }
    async createRoutine(routineModel) {
        const exercisesData = routineModel.exercises;
        delete routineModel.exercises;
        let routine = await this.routineRepository.save(routineModel);
        const exercises = exercisesData.map((exerciseId) => {
            return this.routineExercisesRepository.save({
                exerciseId: exerciseId,
                routineId: routine.id,
            });
        });
        await Promise.all(exercises);
        return await this.routineRepository.findOne({
            where: { id: routine.id },
            relations: ['routineExercises', 'routineExercises.exercise'],
        });
    }
    async getRecommendedRoutines(userId) {
        const userExercises = await this.userExercisesRepository.find({
            where: { user: userId },
            select: ['exercise'],
            loadRelationIds: true,
        });
        const exerciseIds = userExercises.map((ue) => ue.exercise);
        console.log('exerciseIds', exerciseIds);
        if (exerciseIds.length === 0) {
            return await this.getDefaultRoutine();
        }
        return await this.routineRepository.query(`
        SELECT c1.* , 
        JSON_AGG(c3.*) as exercises
        FROM routines c1

        left join routine_exercises c2 on c1.id = c2.routine_id
        left join exercises c3 on c2.exercise_id = c3.id

        where c3.id in (${exerciseIds.join(',')})


        GROUP BY c1.id
        `);
    }
    async getRoutine(id) {
        return await this.routineRepository.findOne({
            where: { id },
            relations: ['routineExercises', 'routineExercises.exercise'],
        });
    }
    async getRoutines() {
        return await this.routineRepository.find({
            relations: ['routineExercises', 'routineExercises.exercise'],
        });
    }
    async updateRoutine(id, updateRoutineModel) {
        const routine = await this.routineRepository.findOne({ where: { id } });
        if (routine) {
            const updatedRoutineBody = Object.assign(Object.assign({}, routine), updateRoutineModel);
            let updatedRoutine = await this.routineRepository.save(updatedRoutineBody);
            if (updateRoutineModel.exercises) {
                await this.routineExercisesRepository.delete({ exerciseId: id });
                const exerciseCategories = updateRoutineModel.exercises.map((categoryId) => {
                    return this.routineExercisesRepository.save({
                        exerciseId: id,
                        categoryId,
                    });
                });
                await Promise.all(exerciseCategories);
                updatedRoutine = await this.routineRepository.findOne({
                    where: { id: routine.id },
                    relations: ['routineExercises', 'routineExercises.exercise'],
                });
            }
        }
        return;
    }
    async deleteRoutine(id) {
        const result = await this.routineRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Routine Not Found');
        }
        return;
    }
};
RoutineRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(routine_entity_1.Routines)),
    __param(1, (0, typeorm_1.InjectRepository)(routine_exercise_entity_1.RoutineExercises)),
    __param(2, (0, typeorm_1.InjectRepository)(userexercise_entity_1.UserExercises)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RoutineRepository);
exports.RoutineRepository = RoutineRepository;
//# sourceMappingURL=routine.repository.js.map