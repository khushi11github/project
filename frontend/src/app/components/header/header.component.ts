import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user';
// import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user!:User;
  constructor(private UserService:UserService) {
    UserService.userObservable.subscribe((newUser)=>{
 this.user = newUser;
    });
  }
logout(){
this.UserService.logout();
}

get isAuth(){
  return this.user.token;
}
  }

