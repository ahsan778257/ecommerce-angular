import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormService {


   dataUrl = "http://127.0.0.1:8000/api/user/add";

  constructor(private http:HttpClient ){}
  
  postdata(body:any){
  
    return this.http.post(this.dataUrl,body);
  }

}





