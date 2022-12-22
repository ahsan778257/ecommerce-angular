import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  

  public products:Product[]=[
    {
      sno : 'AA001',
      name : 'ahasn',
      image : 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 1500,
      quantity: 2
    },
    {
      sno : 'AA002',
      name : 'ahasn',
      image : 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 1500,
      quantity: 2
    },
    {
      sno : 'AA003',
      name : 'ahasn',
      image : 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 1500,
      quantity: 2
    },
    {
      sno : 'AA004',
      name : 'ahasn',
      image : 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 1500,
      quantity: 2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }




public incQty(productId : string){
  this.products = this.products.map((products:Product) =>{
    if(products.sno === productId){
      return{
        ...products,
        quantity: products.quantity +1
      }
      
    }
    return products;

  })
  
}
  public decQty(productId : string){
    this.products = this.products.map((products:Product) =>{
    if(products.sno === productId){
      return{
        ...products,
        quantity: products.quantity -1 > 0 ? products.quantity -1 :1 
      }
      
    }
    return products;

  })
  
}


    public calGrandTotal(){
      let total : number = 0;
      for(let product of this.products){
        total +=( product.price * product.quantity )
      }

        return total;
    }


}
