import { CategoryModel, UpdateCategoryModel } from '../../domain/models/category';
import { CategoryRepository } from '../../infrastructure/repository/category.repository';
export declare class CategoryUseCases {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    createCategory(categoryModel: CategoryModel): Promise<import("../../domain/models/category").FetchCategoryModel>;
    getCategory(id: number): Promise<{
        data: import("../../domain/models/category").FetchCategoryModel;
    }>;
    getCategories(): Promise<import("../../domain/models/category").FetchCategoryModel[]>;
    updateCategory(id: number, categoryUpdateModel: UpdateCategoryModel): Promise<import("../../domain/models/category").FetchCategoryModel>;
    deleteCategory(id: number): Promise<void>;
}
