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
exports.ExerciseController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const exercise_usecases_1 = require("../../../usecases/exercise/exercise.usecases");
const exercise_dto_1 = require("./exercise.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multerS3 = require("multer-s3");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3 = new client_s3_1.S3Client();
let ExerciseController = class ExerciseController {
    constructor(exerciseUseCases) {
        this.exerciseUseCases = exerciseUseCases;
    }
    createExercise(exercise, files) {
        var _a, _b;
        if (!((_a = files.image) === null || _a === void 0 ? void 0 : _a[0]) || !((_b = files.thumbnail) === null || _b === void 0 ? void 0 : _b[0])) {
            throw new common_1.BadRequestException('Please provide an image and a thumbnail');
        }
        return this.exerciseUseCases.createExercise(Object.assign(Object.assign({}, exercise), { image: files.image[0].location, thumbnail: files.thumbnail[0].location }));
    }
    getExercise(id) {
        return this.exerciseUseCases.getExercise(id);
    }
    async getExercises(query) {
        const { exercises, total } = await this.exerciseUseCases.getExercises(query);
        return { total, results: exercises.length, exercises };
    }
    updateExercise(id, exercise, files) {
        var _a, _b;
        if ((_a = files.image) === null || _a === void 0 ? void 0 : _a[0]) {
            exercise.image = files.image[0].location;
        }
        if ((_b = files.thumbnail) === null || _b === void 0 ? void 0 : _b[0]) {
            exercise.thumbnail = files.thumbnail[0].location;
        }
        return this.exerciseUseCases.updateExercise(id, exercise);
    }
    deleteExercise(id) {
        return this.exerciseUseCases.deleteExercise(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'image', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 },
    ], {
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_S3_BUCKET_NAME,
            key: (req, file, cb) => {
                console.log('file', file);
                cb(null, Date.now().toString() + '-' + file.originalname);
            },
        }),
        fileFilter(req, file, cb) {
            if (file.mimetype.includes('image')) {
                cb(null, true);
            }
            else {
                cb(new common_1.BadRequestException('Please provide a valid image file'), false);
            }
        },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exercise_dto_1.CreateExerciseDto, Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "createExercise", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "getExercise", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "getExercises", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'image', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 },
    ], {
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_S3_BUCKET_NAME,
            key: (req, file, cb) => {
                console.log('file', file);
                cb(null, Date.now().toString() + '-' + file.originalname);
            },
        }),
        fileFilter(req, file, cb) {
            if (file.mimetype.includes('image')) {
                cb(null, true);
            }
            else {
                cb(new common_1.BadRequestException('Please provide a valid image file'), false);
            }
        },
    })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, exercise_dto_1.UpdateExerciseDto, Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "updateExercise", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "deleteExercise", null);
ExerciseController = __decorate([
    (0, common_1.Controller)('exercises'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [exercise_usecases_1.ExerciseUseCases])
], ExerciseController);
exports.ExerciseController = ExerciseController;
//# sourceMappingURL=exercise.controller.js.map