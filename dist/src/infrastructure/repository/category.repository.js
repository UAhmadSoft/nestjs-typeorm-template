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
exports.CategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../entities/category.entity");
let CategoryRepository = class CategoryRepository {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async createCategory(categoryModel) {
        let category = await this.categoryRepository.save(categoryModel);
        category = await this.categoryRepository.query(`
      SELECT c1.*, COUNT(c2.id) as total_exercises
      FROM categories c1
      LEFT JOIN exercise_categories ec ON c1.id = ec.category_id
      LEFT JOIN exercises c2 ON ec.exercise_id = c2.id
      WHERE c1.id = ${category.id}
      GROUP BY c1.id
      ORDER BY c1.id ASC
      `);
        return category[0];
    }
    async getCategory(id) {
        return await this.categoryRepository.findOne({ where: { id } });
    }
    async getCategories() {
        const categories = await this.categoryRepository.query(`
      SELECT c1.*, COUNT(c2.id) as total_exercises
      FROM categories c1
      LEFT JOIN exercise_categories ec ON c1.id = ec.category_id
      LEFT JOIN exercises c2 ON ec.exercise_id = c2.id
      GROUP BY c1.id
      ORDER BY c1.id ASC
    `);
        return categories;
    }
    async updateCategory(id, updateCategoryModel) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (category) {
            const updatedCategoryBody = Object.assign(Object.assign({}, category), updateCategoryModel);
            let updatedCategory = await this.categoryRepository.save(updatedCategoryBody);
            updatedCategory = await this.categoryRepository.query(`
      SELECT c1.*, COUNT(c2.id) as total_exercises
      FROM categories c1
      LEFT JOIN exercise_categories ec ON c1.id = ec.category_id
      LEFT JOIN exercises c2 ON ec.exercise_id = c2.id
      WHERE c1.id = ${updatedCategory.id}
      GROUP BY c1.id
      ORDER BY c1.id ASC
      `);
            return updatedCategory[0];
        }
        return;
    }
    async deleteCategory(id) {
        const result = await this.categoryRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Category Not Found');
        }
        return;
    }
};
CategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map