import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.interface';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  recipes: Recipe[] = [];

  ngOnInit(): void {}
}
