import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-railwaya',
  templateUrl: './railwaya.component.html',
  styleUrls: ['./railwaya.component.css']
})
export class RailwayaComponent implements OnInit {


  @ViewChild("content",{
    static:false}) el!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public makepdf(){

  let Pdf = new jsPDF();
  Pdf.html(this.el.nativeElement, {
    callback:(Pdf) =>{
      Pdf.save('ahsan.pdf');
    }
  })
  

    
  }


}
