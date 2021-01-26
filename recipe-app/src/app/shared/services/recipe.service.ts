import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  apiURL: string = 'https://api.edamam.com/search?app_id=eaa62c1c&app_key=afad4fd8dc9785756f6873a6d9417d7d&q=chicken'

  constructor(private http:HttpClient) {}

  getRecipe(recipe: string): Observable<any> {
    return this.http.get(`${this.apiURL}${recipe}`)
  }
}
