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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const category_usecases_1 = require("../../../usecases/category/category.usecases");
const category_dto_1 = require("./category.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multerS3 = require("multer-s3");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3 = new client_s3_1.S3Client();
let CategoryController = class CategoryController {
    constructor(categoryUseCases) {
        this.categoryUseCases = categoryUseCases;
    }
    createCategory(category, file) {
        if (!file) {
            throw new common_1.BadRequestException('Please provide an image file');
        }
        return this.categoryUseCases.createCategory(Object.assign(Object.assign({}, category), { image: file.location }));
    }
    getCategory(id) {
        return this.categoryUseCases.getCategory(id);
    }
    getCategories() {
        return this.categoryUseCases.getCategories();
    }
    updateCategory(id, category, file) {
        if (file) {
            category.image = file.location;
        }
        return this.categoryUseCases.updateCategory(id, category);
    }
    deleteCategory(id) {
        return this.categoryUseCases.deleteCategory(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_S3_BUCKET_NAME,
            key: (req, file, cb) => {
                console.log('file', file);
                console.log('cb', cb);
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
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CreateCategoryDto, Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_S3_BUCKET_NAME,
            key: (req, file, cb) => {
                console.log('file', file);
                console.log('cb', cb);
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
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "deleteCategory", null);
CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof category_usecases_1.CategoryUseCases !== "undefined" && category_usecases_1.CategoryUseCases) === "function" ? _a : Object])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map