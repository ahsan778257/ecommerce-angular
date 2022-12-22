import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-selector',
  templateUrl: './them-selector.component.html',
  styleUrls: ['./them-selector.component.css']
})
export class ThemSelectorComponent implements OnInit {

  public darkTheme:boolean= false;

  public image:string = 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  constructor() { }

  ngOnInit(): void {
  }



}
