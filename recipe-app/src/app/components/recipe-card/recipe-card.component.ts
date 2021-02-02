import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.interface';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  showInfo: boolean = false;
  favColor: string = '';
  favoriteList: Recipe[] = this.recipeService.favoriteList;

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

  @Output() favoriteListEmptied = new EventEmitter<boolean>();

  setFavorite(recipe: Recipe): void {
    if (!recipe.favorite) {
      this.favoriteList.push(recipe);
      this.favColor = '#f78f27';
    } else {
      const index: number = this.favoriteList.indexOf(recipe);
      this.favoriteList.splice(index, 1);
      this.favColor = '#213037';
    }

    if (this.favoriteList.length === 0) {
      this.favoriteListEmptied.emit(true);
    }

    recipe.favorite = !recipe.favorite;
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  ngOnInit(): void {
    this.favColor = !this.recipe.favorite ? '#213037' : '#f78f27';
  }
}
