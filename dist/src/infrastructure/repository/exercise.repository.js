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
exports.ExerciseRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exercise_entity_1 = require("../entities/exercise.entity");
const exercise_category_entity_1 = require("../entities/exercise-category.entity");
let ExerciseRepository = class ExerciseRepository {
    constructor(exerciseRepository, exerciseCategoriesRepository) {
        this.exerciseRepository = exerciseRepository;
        this.exerciseCategoriesRepository = exerciseCategoriesRepository;
    }
    async getExercisesCount() {
        return await this.exerciseRepository.count();
    }
    async getExercisesCountPerCategory() {
        const queryBuilder = this.exerciseRepository.createQueryBuilder('exercise');
        queryBuilder.leftJoin('exercise.categories', 'categories');
        queryBuilder.select('categories.id,categories.title, COUNT(*) as count');
        queryBuilder.groupBy('categories.id');
        return await queryBuilder.getRawMany();
    }
    async getTopExercisesByDurationThisMonth() {
        const results = await this.exerciseRepository.query(`
      SELECT 
        e.id AS exercise_id,
        e.title,
        SUM(ue.duration) AS total_duration
        FROM 
            Exercises e
        INNER JOIN 
            user_exercises ue ON e.id = ue.exercise
        WHERE 
            DATE_TRUNC('month', ue.created_on) = DATE_TRUNC('month', CURRENT_DATE)
        GROUP BY 
            e.id, e.title
        ORDER BY 
            total_duration DESC;
    `);
        return results;
    }
    async getExercisesCountPerArea() {
        const queryBuilder = this.exerciseRepository.createQueryBuilder('exercise');
        queryBuilder.select('exercise.area, COUNT(*) as count');
        queryBuilder.groupBy('exercise.area');
        return await queryBuilder.getRawMany();
    }
    async createExercise(exerciseModel) {
        const categories = exerciseModel.categories;
        delete exerciseModel.categories;
        let exercise = await this.exerciseRepository.save(exerciseModel);
        const exerciseCategories = categories.map((categoryId) => {
            return this.exerciseCategoriesRepository.save({
                exerciseId: exercise.id,
                categoryId,
            });
        });
        await Promise.all(exerciseCategories);
        exercise = await this.exerciseRepository.findOne({
            where: { id: exercise.id },
            relations: ['categories'],
        });
        return exercise;
    }
    async getExercise(id) {
        return await this.exerciseRepository.findOne({
            where: { id },
            relations: ['categories'],
        });
    }
    async getExercises(query) {
        const queryBuilder = this.exerciseRepository.createQueryBuilder('exercise');
        queryBuilder.leftJoinAndSelect('exercise.categories', 'categories');
        if (query.sort) {
            queryBuilder.orderBy(`exercise.${query.sort}`);
        }
        if (query.search) {
            queryBuilder.where(`exercise.title ILIKE :search 
        OR exercise.instructions ILIKE :search 
        OR exercise.benefits ILIKE :search 
        OR exercise.caution ILIKE :search`, { search: `%${query.search}%` });
            if (query.categories) {
                queryBuilder.andWhere('exercise.categories = :categories', {
                    categories: query.categories,
                });
            }
        }
        else {
            if (query.categories) {
                queryBuilder.where('exercise.categories = :categories', {
                    categories: (0, typeorm_2.In)(query.categories.split(',')),
                });
            }
        }
        const exercises_count = await queryBuilder.getCount();
        if (query.page && query.limit) {
            queryBuilder.offset((query.page - 1) * query.limit).limit(query.limit);
        }
        console.log('queryBuilder.query', queryBuilder.getQuery());
        const exercises = await queryBuilder.getMany();
        return {
            total: exercises_count,
            exercises,
        };
    }
    async updateExercise(id, updateExerciseModel) {
        const exercise = await this.exerciseRepository.findOne({ where: { id } });
        if (exercise) {
            const updatedExerciseBody = Object.assign(Object.assign({}, exercise), updateExerciseModel);
            let updatedExercise = await this.exerciseRepository.save(updatedExerciseBody);
            if (updateExerciseModel.categories) {
                await this.exerciseCategoriesRepository.delete({ exerciseId: id });
                const exerciseCategories = updateExerciseModel.categories.map((categoryId) => {
                    return this.exerciseCategoriesRepository.save({
                        exerciseId: id,
                        categoryId,
                    });
                });
                await Promise.all(exerciseCategories);
                updatedExercise = await this.exerciseRepository.findOne({
                    where: { id: exercise.id },
                    relations: ['categories'],
                });
            }
            return updatedExercise;
        }
        return;
    }
    async deleteExercise(id) {
        await this.exerciseCategoriesRepository.delete({ exerciseId: id });
        const result = await this.exerciseRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Exercise Not Found');
        }
        return;
    }
};
ExerciseRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exercise_entity_1.Exercises)),
    __param(1, (0, typeorm_1.InjectRepository)(exercise_category_entity_1.ExerciseCategories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ExerciseRepository);
exports.ExerciseRepository = ExerciseRepository;
//# sourceMappingURL=exercise.repository.js.map