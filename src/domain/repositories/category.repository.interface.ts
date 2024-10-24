import { CategoryModel,FetchCategoryModel,UpdateCategoryModel } from '../models/Category';
export interface ICategory {
createCategory(categoryModel:CategoryModel): Promise<FetchCategoryModel>;
getCategory(id:number) : Promise<FetchCategoryModel>;
getCategories() : Promise<FetchCategoryModel[]>;
updateCategory(id: number, updateCategoryModel:UpdateCategoryModel): Promise<FetchCategoryModel>;
deleteCategory(id:number) : Promise<void>;
}
