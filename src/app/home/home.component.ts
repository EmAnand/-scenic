import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
id:any;
desc:any;
tname:any
  imgURL: string | null ;
  constructor(private activeRouter:ActivatedRoute, private router:Router) { 
    this.imgURL = environment.imgUrl;
  }

  ngOnInit(): void {
    this.id = this.activeRouter.paramMap.subscribe((Params:Params) =>  this.desc= Params['desc']);
  }
  ToInternationaldetails(id: any,){
    this.router.navigate(['./International-details', id])

  }
}
