import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,HeaderComponent,FooterComponent,RouterLinkActive],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
 food!: Food;

 constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService,private router: Router) {
  activatedRoute.params.subscribe((params)=>{
    if(params['id'])
    foodService.getFoodById(params['id']).subscribe(serverFood =>{
   this.food = serverFood;
    })
  });

}
  ngOnInit(): void {

  }

addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');

}

}
