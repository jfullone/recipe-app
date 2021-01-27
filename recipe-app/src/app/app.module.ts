import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesPageComponent,
    RecipeListComponent,
    SearchCriteriaComponent,
    HeaderComponent,
    RecipeCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
