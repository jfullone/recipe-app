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

  favoriteList: Recipe[] = this.recipeService.favoriteList;

  favColor: string = '';

  setFavorite(recipe: Recipe): void {
    if (!recipe.favorite) {
      this.favoriteList.push(recipe);
    } else {
      const index: number = this.favoriteList.indexOf(recipe);
      this.favoriteList.splice(index, 1);
    }
    recipe.favorite = !recipe.favorite;
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.favColor = !this.recipe.favorite ? '#213037' : '#f78f27';
  }
}
