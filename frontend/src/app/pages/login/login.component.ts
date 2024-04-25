import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateHeaderValue } from 'http';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ToastrModule } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,RouterLinkActive,FooterComponent,HeaderComponent

  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
// export class LoginComponent {
//   loginForm! : FormGroup;
//   isSubmitted = false;
//   constructor(private formBuilder:FormBuilder){}
//   ngOInit():void{
//     this.loginForm = this.formBuilder.group({
//     email:[' ',[Validators.required, Validators.email]],
//     password:[' ',[Validators.required, Validators.minLength(6)]]
//     });


//   }
//   get fc(){
//     return this.loginForm.controls;
//   }
  // submit(){
  //   this.isSubmitted = true;
  //   if(this.loginForm.invalid) return;
  //   alert(`email: ${this.fc['email'].value}, password: ${this.fc['password'].value}`);
  // }


// }
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted= false;
  returnUrl ='';
  // onSubmit() {



  constructor(private formBuilder: FormBuilder,private userService:UserService,
    private acativatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.returnUrl = this.acativatedRoute.snapshot.queryParams['returnUrl'];//?
  }
 get fc() {
    return this.loginForm.controls;
  }

  Onsubmit(){
    this.isSubmitted = true;


    if (this.loginForm.invalid || !this.fc['email'] || !this.fc['password']) return;



this.userService.login({email:this.fc['email'].value,
password:this.fc['password'].value}).subscribe(()=>{
  this.router.navigateByUrl(this.returnUrl);
});

}


}
