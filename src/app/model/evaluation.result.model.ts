import {CategoryModel} from './category.model';

export class EvaluationResultModel {

  id: string;
  score: number;
  apiName: string;
  categories: CategoryModel[];
  evaluationDate: Date;

}
