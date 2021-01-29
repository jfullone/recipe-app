import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  apiURL: string =
    'https://api.edamam.com/search?app_id=6fa67ecc&app_key=2023a81e815598f21c69a01dfd671038&from=0&to=20';

  constructor(private http: HttpClient) {}

  recipeList: Recipe[] = [];
  favoriteList: Recipe[] = [];


  mealType: string = '';

  getRecipes(keyword: string, dietRestrictions: string[], maxIngredients: number): Observable<any> {
    let dietRestrictionsParamArr: string[] = [];
    dietRestrictions.forEach((restriction) => {
      const restrictionFormatted = restriction.toLowerCase().split(' ').join('-');
      dietRestrictionsParamArr.push(`&health=${restrictionFormatted}`);
    });

    let dietRestrictionsParam = dietRestrictionsParamArr.join('');
    let maxIngredientsParam = ''
    if (maxIngredients > 0) {
      maxIngredientsParam = `ingr=${maxIngredients}`
    }
    return this.http.get(
      `${this.apiURL}&q=${keyword}${dietRestrictionsParam}${maxIngredientsParam}`
    );
  }
}
