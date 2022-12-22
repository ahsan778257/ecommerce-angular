import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-edit-employee-component',
  templateUrl: './edit-employee-component.component.html',
  styleUrls: ['./edit-employee-component.component.css']
})
export class EditEmployeeComponentComponent implements OnInit {

    public employeeId:any;
    public employee:any= [];

    editFormData = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
})

  constructor( 
    private activatedroute:ActivatedRoute,
    private Router:Router,
    private employeeservice:EmployeeService,
            ) { }

  ngOnInit(): void {
    
    const routeParams = this.activatedroute.snapshot.paramMap;
      this.employeeId = Number(routeParams.get('employeeId'));
      this.employeeservice.findEmployee(this.employeeId).subscribe((data:Employee[])=>{
        this.employee = data;
        this. editFormData = new FormGroup({
          name: new FormControl(this.employee.name),
          email: new FormControl(this.employee.email),
          password: new FormControl(this.employee.password),
    });
      });
       
      
    };




    public updateUserData(){
        this.employeeservice.Updateuser(this.employeeId,this.editFormData.value).subscribe((data)=>{
        this.Router.navigateByUrl('');
      });

    };
  
   
























  public Password ="password"
  public showpassword(evnt:any){

    if(evnt.target.checked ){
      this.Password = "text";
    }else{
      this.Password = "password";
    }

  };





}
