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
exports.CategoryUseCases = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("../../infrastructure/repository/category.repository");
let CategoryUseCases = class CategoryUseCases {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async createCategory(categoryModel) {
        return await this.categoryRepository.createCategory(categoryModel);
    }
    async getCategory(id) {
        const data = await this.categoryRepository.getCategory(id);
        if (!data) {
            throw new common_1.HttpException('Category Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getCategories() {
        return await this.categoryRepository.getCategories();
    }
    async updateCategory(id, categoryUpdateModel) {
        return await this.categoryRepository.updateCategory(id, categoryUpdateModel);
    }
    async deleteCategory(id) {
        return await this.categoryRepository.deleteCategory(id);
    }
};
CategoryUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CategoryUseCases);
exports.CategoryUseCases = CategoryUseCases;
//# sourceMappingURL=category.usecases.js.map