import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formsubmit(f:NgForm){
console.log(f);
console.log(f.value);
  }
}
