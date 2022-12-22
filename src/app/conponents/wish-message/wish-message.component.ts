import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {

  public wish = 'Hello World'

  public tourimage = 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  constructor() { }

  ngOnInit(): void {
  }

  goodmorning(){
    this.wish = 'Good Morning';
  }
  goodafternoon(){
     this.wish = 'Good  Afternoon';
  }
  goodevening(){
    this. wish = 'Good Evening';
  }




}
