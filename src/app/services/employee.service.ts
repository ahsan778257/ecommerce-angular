import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  public Url:string = "http://127.0.0.1:8000";

  constructor(private httpClient:HttpClient) { }
  
public getEmployee():Observable<Employee[]>{


  return this.httpClient.get<Employee[]>(this.Url +`/api/user/show`);
}


public findEmployee(employeeId:number):Observable<Employee[]>{

   return this.httpClient.get<Employee[]>(this.Url+`/api/user/edit/`+employeeId);
}


public DeleteId(deleteid:number):Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(this.Url+`/api/user/delete/`+deleteid)

}


public Updateuser(employeeId:number, body:any):Observable<Employee[]>{
  return this.httpClient.put<Employee[]>(this.Url+`/api/user/update/`+employeeId,body)

}


}
