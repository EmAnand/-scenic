import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Data } from '../shared-module/dimensionData';


@Component({
  selector: 'app-domestic-details',
  templateUrl: './domestic-details.component.html',
  styleUrls: ['./domestic-details.component.css']
})
export class DomesticDetailsComponent implements OnInit {
do : any =Data.DimensionData.Country.Indiado
donts: any = Data.DimensionData.Country.Indiadonts
  desc: any;
  id: any;
tname: any;
  constructor(private activeRouter:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.id = this.activeRouter.paramMap.subscribe((Params:Params) =>  this.desc= Params['desc']);
  }
  ToInternationaldetails(id: any,){
    this.router.navigate(['./Places', id])

  }
}
