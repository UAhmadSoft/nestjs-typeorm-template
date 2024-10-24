import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryModel, FetchCategoryModel, UpdateCategoryModel  } from '../../domain/models/category';
import { ICategory } from '../../domain/repositories/category.repository.interface';
import { Categories } from '../entities/category.entity';

@Injectable()
export class CategoryRepository implements ICategory {
  constructor(
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>,
  ) {}

  async createCategory(categoryModel: CategoryModel): Promise<FetchCategoryModel> {
    return await this.categoryRepository.save(categoryModel);
  }

  async getCategory(id: number): Promise<FetchCategoryModel> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async getCategories(): Promise<FetchCategoryModel[]> {
    return await this.categoryRepository.find();
  }

  async updateCategory(
    id: number,
    updateCategoryModel: UpdateCategoryModel,
  ): Promise<FetchCategoryModel> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (category) {
      const updatedCategory = { ...category, ...updateCategoryModel };
      return this.categoryRepository.save(updatedCategory);
    }
    return;
  }

  async deleteCategory(id: number): Promise<void> {
    const result = await this.categoryRepository.delete(id);
    if(result.affected === 0){
        throw new NotFoundException('Category Not Found');
    }

    return;
  }
}
