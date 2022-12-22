import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


public increaseNumber: string =""



increase(){
  this.increaseNumber = this.increaseNumber +1 ;
}







}
