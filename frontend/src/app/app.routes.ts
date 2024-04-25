import { Routes } from '@angular/router';
//import { OrderComponent } from './pages/order/order.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';

import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { BookseatsComponent } from './pages/bookseats/bookseats.component';

// import { LoginComponent } from './pages/login/login.component';//
// import { BookseatsComponent } from './pages/bookseats/bookseats.component';
// import { SweetsComponent } from './pages/sweets/sweets.component';
// import { BookseatsComponent } from './co/bookseats/bookseats.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
 // { path: 'order', component: OrderComponent },

  { path: 'bookseats',component:BookseatsComponent},
 // {path:'sweets',component:SweetsComponent},
  {path:'search/:searchTerm',component: MenuComponent},
  {path:'menu',component:MenuComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'tag/:tag',component:MenuComponent},
  {path:'cart-page',component:CartPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'about', component:AboutComponent},

  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];
