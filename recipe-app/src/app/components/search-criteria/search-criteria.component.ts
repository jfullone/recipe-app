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

  /*   get recipe(): Recipe {
    return this.recipeService.recipe;
  } */

  setRecipe(data: any) {
    this.recipeService.recipe.name = data.recipe.label;
    this.recipeService.recipe.url = data.recipe.url;
    this.recipeService.recipe.image = data.recipe.image;
    this.recipeService.recipe.servings = data.recipe.yield;
    this.recipeService.recipe.time = data.recipe.totalTime;
    this.recipeService.recipe.dietLabels = data.recipe.dietLables;
    this.recipeService.recipe.healthLabels = data.recipe.healthLables;
    this.recipeService.recipe.ingredientLines = data.recipe.ingredientLines;
    this.recipeService.recipe.favorite = false;
  }

  searchRecipes(event: any) {
    event.stopPropagation();

    this.recipeService.getRecipes().subscribe((data: any) => {
      console.log(data.hits[0].recipe);
      //this.setRecipe(data);
    });
  }

  ngOnInit(): void {}
}
