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
exports.UserExerciseRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const userexercise_entity_1 = require("../entities/userexercise.entity");
let UserExerciseRepository = class UserExerciseRepository {
    constructor(userExerciseRepository) {
        this.userExerciseRepository = userExerciseRepository;
    }
    async createUserExercise(userExerciseModel) {
        return await this.userExerciseRepository.save(userExerciseModel);
    }
    async getUserExercise(id) {
        return await this.userExerciseRepository.findOne({ where: { id } });
    }
    async getUserExercises() {
        return await this.userExerciseRepository.find();
    }
    async getPercentageIncreaseInDuration(userId) {
        const exercises = await this.userExerciseRepository.find({
            where: { user: userId },
            order: { created_on: 'DESC' },
        });
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let todayDuration = 0;
        let lastDayDuration = 0;
        let lastDayFound = false;
        let lastDayDate;
        for (const exercise of exercises) {
            const exerciseDate = new Date(exercise.created_on);
            exerciseDate.setHours(0, 0, 0, 0);
            const time = exerciseDate.getTime();
            if (time === today.getTime()) {
                todayDuration += exercise.duration;
            }
            else if (!lastDayFound && time < today.getTime()) {
                lastDayDate = time;
                lastDayFound = true;
                lastDayDuration += exercise.duration;
            }
            else if (lastDayFound && time === lastDayDate) {
                lastDayDuration += exercise.duration;
            }
            else if (lastDayFound && time < lastDayDate) {
                break;
            }
        }
        if (lastDayDuration === 0) {
            return 100;
        }
        const increase = ((todayDuration - lastDayDuration) / lastDayDuration) * 100;
        return increase;
    }
    async getActiveStrikeOfUsualExercises(userId) {
        const exercises = await this.userExerciseRepository.find({
            where: { user: userId },
            order: { created_on: 'DESC' },
            select: ['created_on'],
        });
        let strike = {
            count: 0,
        };
        let currentDate = new Date();
        for (const exercise of exercises) {
            if (exercise.created_on.toDateString() === currentDate.toDateString()) {
                strike.count++;
                strike.date = exercise.created_on;
                currentDate.setDate(currentDate.getDate() - 1);
            }
            else {
                break;
            }
        }
        return strike;
    }
    async getLongestExerciseStreak(userId) {
        const streak = await this.userExerciseRepository.query(`
    WITH user_activity_dates AS (
    SELECT DISTINCT
        DATE(ue.created_on) AS activity_date
    FROM
        user_exercises ue
    WHERE
        ue.user = ${userId}
),
consecutive_days AS (
    SELECT
        activity_date,
        ROW_NUMBER() OVER (ORDER BY activity_date) AS rn
    FROM
        user_activity_dates
),
streaks AS (
    SELECT
        activity_date,
        DATE(activity_date) - INTERVAL '1 day' * (rn - 1) AS streak_group
    FROM
        consecutive_days
),
streak_lengths AS (
    SELECT
        streak_group,
        COUNT(*) AS streak_length,
        MIN(activity_date) AS streak_start_date,
        MAX(activity_date) AS streak_end_date
    FROM
        streaks
    GROUP BY
        streak_group
)
SELECT
    streak_length AS longest_streak,
    streak_start_date,
    streak_end_date
FROM
    streak_lengths
WHERE
    streak_length = (
        SELECT MAX(streak_length) FROM streak_lengths
    )
ORDER BY
    streak_start_date
LIMIT 1;
`);
        return streak;
    }
    async getTotalDurationForToday(userId) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const total = await this.userExerciseRepository
            .createQueryBuilder('user_exercises')
            .select('SUM(user_exercises.duration)', 'sum')
            .where('user_exercises.user = :userId', { userId })
            .andWhere('user_exercises.created_on >= :today', { today })
            .andWhere('user_exercises.created_on < :tomorrow', { tomorrow })
            .getRawOne();
        return Number(total.sum) || 0;
    }
    async daysComplted(userId) {
        const streak = await this.userExerciseRepository.query(`
    SELECT
        COUNT(DISTINCT DATE(ue.created_on)) AS days_completed
    FROM
        user_exercises ue
    WHERE
        ue.user = ${userId}
    `);
        return streak[0].days_completed;
    }
    groupDataByDate(data) {
        console.log('data', data);
        return data.reduce((acc, curr) => {
            const date = curr.exercise_date.toString().split('T')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push({
                title: curr.title,
                total_duration: curr.total_duration,
            });
            return acc;
        }, {});
    }
    async getDailyExercisesSummary(userId) {
        let exercises = await this.userExerciseRepository.query(`SELECT
    DATE(ue.created_on) AS exercise_date,
    e.title,
    SUM(ue.duration) AS total_duration
FROM
    user_exercises ue
INNER JOIN
    exercises e ON ue.exercise = e.id
WHERE
    ue.user = ${userId}
GROUP BY
    exercise_date,
    e.title
ORDER BY
    exercise_date DESC,
    e.title ASC;
`);
        exercises = this.groupDataByDate(exercises);
        return exercises;
    }
    async updateUserExercise(id, updateUserExerciseModel) {
        const userExercise = await this.userExerciseRepository.findOne({
            where: { id },
        });
        if (userExercise) {
            const updatedUserExercise = Object.assign(Object.assign({}, userExercise), updateUserExerciseModel);
            return this.userExerciseRepository.save(updatedUserExercise);
        }
        return;
    }
    async deleteUserExercise(id) {
        const result = await this.userExerciseRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('UserExercise Not Found');
        }
        return;
    }
};
UserExerciseRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userexercise_entity_1.UserExercises)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserExerciseRepository);
exports.UserExerciseRepository = UserExerciseRepository;
//# sourceMappingURL=userexercise.repository.js.map