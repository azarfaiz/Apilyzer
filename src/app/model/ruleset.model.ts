import {IssuesModel} from "./issues.model";

export class RulesetModel {
category : string;
score : number;
issues : IssuesModel[];
}
