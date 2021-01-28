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

  keyword: string = '';
  dietRestrictions: string[] = [];
  mealType: string = '';

  getRecipes(): Observable<any> {
    let dietRestrictionsParam: string[] = [];
    this.dietRestrictions.forEach((restriction) => {
      dietRestrictionsParam.push(`&health=${restriction}`);
    });
    dietRestrictionsParam.join('');

    return this.http.get(
      //`${this.apiURL}&q=${this.keyword}&mealType=${this.mealType}${dietRestrictionsParam}`
      'https://api.edamam.com/search?app_id=6fa67ecc&app_key=2023a81e815598f21c69a01dfd671038&from=0&to=20&q=chicken'
    );
  }
}
