import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  searchTerm ='';
  constructor(activatedRoute: ActivatedRoute,private router: Router ){
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    });
  }
  ngOnInit(): void {

  }

  search(term:string):void{
    if(term)
      this.router.navigateByUrl('/search/'+ term);
      else
      this.router.navigateByUrl('/');
    }
  }




