import { CategoryModel, UpdateCategoryModel } from '../../domain/models/category';
import { CategoryRepository } from '../../infrastructure/repository/category.repository';
export declare class CategoryUseCases {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    createCategory(categoryModel: CategoryModel): Promise<any>;
    getCategory(id: number): Promise<{
        data: any;
    }>;
    getCategories(): Promise<any>;
    updateCategory(id: number, categoryUpdateModel: UpdateCategoryModel): Promise<any>;
    deleteCategory(id: number): Promise<any>;
}
