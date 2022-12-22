import { Component, OnInit } from '@angular/core';
import { timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {




  public increase:number = 0

  constructor() {
    
  }

  ngOnInit(): void {

  }
  getIncreasenumber(){
    this.increase = this.increase + 1;

  }
  getDecreaseNumber(){
    this.increase = this.increase - 1 > 0 ? this.increase -1 : 0;
}


  









}
