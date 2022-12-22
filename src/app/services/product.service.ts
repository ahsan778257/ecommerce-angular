import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product  = {
      sno : 'AA001',
      name : 'ahasn',
      image : 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      price: 1500,
      quantity: 2
  }


  constructor() { }

   public getproduct(): Product{
     return this.products;
  }




}
