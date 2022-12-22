import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RailwayserviceService {

  railway:any;

  constructor( private httpclient:HttpClient) { }




}
