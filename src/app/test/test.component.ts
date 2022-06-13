import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private date = new Date();

  public hour: any;
  public minute: string | undefined;
  public second: String | undefined;
 public  ampm: string | undefined
public day: string | undefined
  constructor() { }

  ngOnInit(): void {

    setInterval(() =>{
      const date = new Date();
      this.updateDate(date);
    }, 1000); 
    this.day =this.daysArray[this.date.getDate()];
  }
  private updateDate(date: Date){
    const hour = date.getHours();
    this.ampm = hour >= 12 ? 'PM' : 'AM';
    this.hour = hour % 12;
    this.hour = this.hour ? this.hour : 12; 
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ?  '0' + minutes : minutes.toString();
    
    const second = date.getSeconds();
    this.second = second < 10 ? '0' + second : second.toString();
  }

}
