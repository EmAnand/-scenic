import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Data } from '../shared-module/dimensionData';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
howtoreach : any =Data.DimensionData.Country.Howtoreach;
besttimetovisit: any =Data.DimensionData.Country.BestTimeToVisit;
attraction: any = Data.DimensionData.Country.attraction
youtube :any= Data.DimensionData.Country.youtube

  imgURl: string;
  name: any;
  // videoURl: string;
  constructor( private activeRouter:ActivatedRoute) {
    this.imgURl= environment.imgUrl;
    //this.videoURl =environment.videoUrl;
   }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((val: Params) => {
      this.name = val['id'];
    });
  }

}
