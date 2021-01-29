import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.interface';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipeList: Recipe[] = [];
  recipeListEmpty: boolean = true;

  ngOnInit(): void {
    this.recipeList = this.recipeService.recipeList;
    this.recipeListEmpty = this.recipeList.length <= 0;
  }
}
