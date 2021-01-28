import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.interface';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipeRoute: string = '';

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
      dietLabels: recipe.dietLables,
      healthLabels: recipe.healthLables,
      ingredientLines: recipe.ingredientLines,
      favorite: false,
    };

    this.recipeService.recipeList.push(newRecipe);
  }

  searchRecipes(event: any) {
    event.stopPropagation();

    this.recipeService.getRecipes().subscribe((data: any) => {
      data.hits.forEach((hit: { recipe: any }) => {
        this.setRecipeList(hit.recipe);
      });
    });

    this.recipeRoute = '/recipe-list';
  }

  ngOnInit(): void {}
}
