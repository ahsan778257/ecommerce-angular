import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Other } from '../models/other';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor( private httpClient:HttpClient) { }

public getProductList():Observable<Other[]>{
  
  let dataUrl = "https://jsonplaceholder.typicode.com/users";
  
  return this.httpClient.get<Other[]>(dataUrl);


}



}
