import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CategoryModel, UpdateCategoryModel  } from '../../domain/models/category';
import { CategoryRepository } from '../../infrastructure/repository/category.repository';

@Injectable()
export class CategoryUseCases {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(categoryModel: CategoryModel) {
    return await this.categoryRepository.createCategory(categoryModel);
  }

  async getCategory(id: number) {
    const data = await this.categoryRepository.getCategory(id);
    if (!data) {
      throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getCategories() {
    return await this.categoryRepository.getCategories();
  }

  async updateCategory(id: number, categoryUpdateModel: UpdateCategoryModel) {
    return await this.categoryRepository.updateCategory(id, categoryUpdateModel);
  }

  async deleteCategory(id: number) {
    return await this.categoryRepository.deleteCategory(id);
  }
}
