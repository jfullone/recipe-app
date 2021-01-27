import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.interface';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  constructor() {}

  favorites: Recipe[] = [];

  ngOnInit(): void {}
}
