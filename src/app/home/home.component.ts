import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Data } from '../shared-module/dimensionData';
import { timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // welcomemsg ="welcome Vikash";
//  dt= new Date();

dateTime = Date();




//  todayNumber: number = Date.now();
//  todayDate : Date = new Date();
//  todayString : string = new Date().toDateString();
//  todayISOString : string = new Date().toISOString();

  dont:any |null =Data.DimensionData.Country.Dont
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
  ScrollToTop(){
   window.scrollTo(0,0);
  }
  ChartBox(){
    // alert('Nice, you triggered this alert message!' )
  }
  // observableTimer() {
  //   const source = timer(1000, 2000);
  //   const abc = source.subscribe(val => {
  //     console.log(val, '-');
  //     this.subscribeTimer = this.timeLeft + val;
  //   });
  // }
}
