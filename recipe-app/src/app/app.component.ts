import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipe-app';

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipe('chicken').subscribe((data: any) => {
      console.log(data);
    });
  }
}
