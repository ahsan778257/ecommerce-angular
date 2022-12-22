import { Component, OnInit } from '@angular/core';
import { Other } from 'src/app/models/other';
import { OtherService } from 'src/app/services/other.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  public productlist:Other[]=[] as Other[];


  constructor( private otherservice:OtherService) { }

  ngOnInit(): void {
    this.otherservice.getProductList().subscribe((data:Other[])=>{
      this.productlist = data;
    })

  }

}
