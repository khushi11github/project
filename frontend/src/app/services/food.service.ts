import { Injectable } from '@angular/core';

import { Food } from '../shared/models/Food';
import { Observable } from 'rxjs';
import { Tag } from '../shared/models/tags';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL.replace('https', 'http')); // Replace HTTPS with HTTP
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL.replace('https', 'http') + searchTerm); // Replace HTTPS with HTTP
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL.replace('https', 'http')); // Replace HTTPS with HTTP
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Food[]>(FOODS_BY_TAG_URL.replace('https', 'http') + tag); // Replace HTTPS with HTTP
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL.replace('https', 'http') + foodId); // Replace HTTPS with HTTP
  }
}
