import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  constructor() {}

  /*   setFavorite(): void {
    if (!this.recipe.favorite) {
      this.favorites.push(this.recipe);
    } else {
      const index: number = this.recipes.indexOf(this.recipe);
      this.recipes.splice(index, 1);
    }
  } */

  ngOnInit(): void {}
}
