import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.interface';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private recipeService: RecipeService, private router: Router) {}

  keyword: string = '';
  dietRestrictions: string[] = [];
  maxIngredients?: any;
  diets: string[] = ['Vegan', 'Vegetarian'];
  recipeRoute: string = '';

  onCheckChange(event: any) {
    if (event.target.checked) {
      this.dietRestrictions.push(event.target.value);
    } else {
      let i: number = this.dietRestrictions.indexOf(event.target.value);
      this.dietRestrictions.splice(i, 1);
    }
  }

  get recipeList(): Recipe[] {
    return this.recipeService.recipeList;
  }

  setRecipeList(recipe: any) {
    const newRecipe: Recipe = {
      name: recipe.label,
      url: recipe.url,
      image: recipe.image,
      servings: recipe.yield,
      time: recipe.totalTime,
      dietLabels: recipe.dietLabels,
      healthLabels: recipe.healthLabels,
      ingredientLines: recipe.ingredientLines,
      favorite: false,
    };

    this.recipeService.recipeList.push(newRecipe);
  }

  searchRecipes(event: any) {
    this.recipeService
      .getRecipes(this.keyword, this.dietRestrictions, this.maxIngredients)
      .subscribe((data: any) => {
        data.hits.forEach((hit: { recipe: any }) => {
          this.setRecipeList(hit.recipe);
        });
        this.router.navigate(['/recipe-list']);
      });
  }

  ngOnInit(): void {
    this.recipeService.recipeList = [];
  }
}
