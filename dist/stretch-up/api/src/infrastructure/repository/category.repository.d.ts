import { Repository } from 'typeorm';
import { CategoryModel, FetchCategoryModel, UpdateCategoryModel } from '../../domain/models/category';
import { ICategory } from '../../domain/repositories/category.repository.interface';
import { Categories } from '../entities/category.entity';
export declare class CategoryRepository implements ICategory {
    private categoryRepository;
    constructor(categoryRepository: Repository<Categories>);
    createCategory(categoryModel: CategoryModel): Promise<FetchCategoryModel>;
    getCategory(id: number): Promise<FetchCategoryModel>;
    getCategories(): Promise<FetchCategoryModel[]>;
    updateCategory(id: number, updateCategoryModel: UpdateCategoryModel): Promise<FetchCategoryModel>;
    deleteCategory(id: number): Promise<void>;
}
