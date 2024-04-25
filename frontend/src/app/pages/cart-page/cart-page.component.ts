import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../shared/models/CartItem';
import { Cart } from '../../shared/models/Cart';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../components/partials/title/title.component';

import { RouterLink } from '@angular/router';






@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,TitleComponent,RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })

   }
  ngOnInit(): void {

  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);

  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

}
