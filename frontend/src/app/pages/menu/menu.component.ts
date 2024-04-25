import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { FoodService } from '../../services/food.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from '../../components/partials/search/search.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TagsComponent } from '../../components/tags/tags.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,SearchComponent,FooterComponent,HeaderComponent,RouterLink,TagsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements  OnInit {

 foods:Food[] = [];
 constructor( private foodService:FoodService, activatedRoute:ActivatedRoute){
   let foodsObservalbe:Observable<Food[]>;


  activatedRoute.params.subscribe((params) => {
  if(params['searchTerm'])
    foodsObservalbe=this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
  else if(params['tag'])
    foodsObservalbe=this.foodService.getAllFoodsByTag(params['tag']);
  else
  foodsObservalbe = foodService.getAll();


  foodsObservalbe.subscribe((serverFoods) => {
    this.foods = serverFoods;
 })
 })

}
  ngOnInit(): void {

  }


 }
