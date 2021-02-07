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
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { SpaceAfterComma } from './shared/pipes/space-after-comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesPageComponent,
    RecipeListComponent,
    SearchCriteriaComponent,
    HeaderComponent,
    RecipeCardComponent,
    SpaceAfterComma,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
