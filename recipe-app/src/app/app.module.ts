import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

=======
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
>>>>>>> a558f521f3cc140e0bb901d3d1072444d8129a8c

@NgModule({
  declarations: [
    AppComponent,
    FavoritesPageComponent,
    RecipeListComponent,
    SearchCriteriaComponent,
    HeaderComponent,
    RecipeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    MatIconModule,
>>>>>>> a558f521f3cc140e0bb901d3d1072444d8129a8c
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
