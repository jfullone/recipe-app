export interface Recipe {
  name: string;
  url: string;
  image: string;
  servings: number;
  time: number;
  dietLabels: string;
  healthLabels: string[];
  ingredientLines: string[];
  favorite: boolean;
}
