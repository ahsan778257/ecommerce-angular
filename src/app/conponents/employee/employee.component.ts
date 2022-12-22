import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 public Employees:Employee[] = [] as Employee[] ;
 public deleteid:any;


  constructor( private employeeservice:EmployeeService,
    private activateroute:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.ShowEmployeeData();
     
    const routeParams = this.activateroute.snapshot.paramMap;
    this.deleteid = Number(routeParams.get('deleteid'));
    

    this.employeeservice.DeleteId(this.deleteid).subscribe((data:any) =>{
      this.route.navigateByUrl('');
      
      
    }, (err)=>{
      console.log(err);
      
    })
    
  }

  public ShowEmployeeData(){
    this.employeeservice.getEmployee().subscribe((data:Employee[]) =>{
      this.Employees = data;
      console.log(data);
     } ,(err)=>{
      console.log(err);
      
     });
  }



}


