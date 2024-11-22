import { CategoryUseCases } from '../../../usecases/category/category.usecases';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
export declare class CategoryController {
    private readonly categoryUseCases;
    constructor(categoryUseCases: CategoryUseCases);
    createCategory(category: CreateCategoryDto, file: any): any;
    getCategory(id: number): any;
    getCategories(): any;
    updateCategory(id: number, category: UpdateCategoryDto & {
        image?: string;
    }, file: any): any;
    deleteCategory(id: number): any;
}
