import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';

const routes: Routes = [
  {path: "search-criteria", component: SearchCriteriaComponent},
  {path: "favorites-page", component: FavoritesPageComponent},
  {path: "recipe-list", component: RecipeListComponent},
  {path: "", redirectTo: "/search-criteria", pathMatch: "full"},
  {path: "**", component: SearchCriteriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
