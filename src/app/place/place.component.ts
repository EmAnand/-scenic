import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  imgURl: string;
  constructor() {
    this.imgURl= environment.imgUrl;
   }

  ngOnInit(): void {
  }

}
