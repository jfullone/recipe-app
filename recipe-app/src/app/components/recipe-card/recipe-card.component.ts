import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.interface';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {

  showInfo: boolean = false;

  @Input() recipe: Recipe = {
    name: '',
    url: '',
    image: '',
    servings: 0,
    time: 0,
    dietLabels: [],
    healthLabels: [],
    ingredientLines: [],
    favorite: false,
  };

  @Input() recipeList: Recipe[] = [];

  /*   setFavorite(): void {
    if (!this.recipe.favorite) {
      this.favorites.push(this.recipe);
    } else {
      const index: number = this.recipes.indexOf(this.recipe);
      this.recipes.splice(index, 1);
    }
  } */

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  constructor() {}

  ngOnInit(): void {}
}
