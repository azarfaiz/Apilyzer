import {SubCategoryModel} from './sub-category.model';

export class CategoryModel {
  name: string;
  score: number;
  subCategories: SubCategoryModel[];
}
