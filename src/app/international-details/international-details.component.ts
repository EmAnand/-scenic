import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Data } from '../shared-module/dimensionData';

@Component({
  selector: 'app-international-details',
  templateUrl: './international-details.component.html',
  styleUrls: ['./international-details.component.css']
})
export class InternationalDetailsComponent implements OnInit {
//Usa: String= "(USA)Do not call black people Negro. They will feel contempt for his indemnity, as Negro mainly refers to Africa black slaves sold to the united States."
//thailand: String= "(Thailand)Feet are considered dirty in Thailand; in many places shoes are left outside and feet stay on the floor. Yee’s book teaches you why (and when) to take off your shoes if you enter homes and some shops. Quick tip – it’s common to leave your shoes outside your hotel room as well." 

//nam: any | null =Data.DimensionData.Country.Name
dont:any |null =Data.DimensionData.Country.Dont
do :any[] | null = Data.DimensionData.Country.Do
// donts :any | null = Data.DimensionData.Country.Dos
  name: any;
  imgURl: string;
//U:any | null =Data.DimensionData.Country[2]

  
constructor( private activeRouter:ActivatedRoute) {
  this.imgURl = environment.imgUrl;
 }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((val: Params) => {
      this.name = val['id'];
    });



  }
  
}
