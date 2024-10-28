export class CategoryModel {
  title: string;
  image: string;
}

export class FetchCategoryModel {
  id: number;
  title: string;
  image: string;
}

export class UpdateCategoryModel {
  title?: string;
  image?: string;
}
