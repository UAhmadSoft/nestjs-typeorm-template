import { CategoryUseCases } from '../../../usecases/category/category.usecases';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
export declare class CategoryController {
    private readonly categoryUseCases;
    constructor(categoryUseCases: CategoryUseCases);
    createCategory(category: CreateCategoryDto): Promise<import("../../../domain/models/category").FetchCategoryModel>;
    getCategory(id: number): Promise<{
        data: import("../../../domain/models/category").FetchCategoryModel;
    }>;
    getCategories(): Promise<import("../../../domain/models/category").FetchCategoryModel[]>;
    updateCategory(id: number, category: UpdateCategoryDto): Promise<import("../../../domain/models/category").FetchCategoryModel>;
    deleteCategory(id: number): Promise<void>;
}
