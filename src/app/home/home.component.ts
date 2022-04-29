import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id:any;
desc:any;
tname:any
  constructor(private activeRouter:ActivatedRoute, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.id = this.activeRouter.paramMap.subscribe((Params:Params) =>  this.desc= Params['desc']);
  }
  ToInternationaldetails(id: any,){
    this.router.navigate(['./International-details', id])

  }
}
