import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import { Employee } from 'src/app/models/Employee';
import { Customer } from 'src/app/models/FormModule';
import { FormService } from 'src/app/services/form.service';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']

})
export class FormComponentComponent implements OnInit {
  
    
  public Password:string = "password"
  constructor( private formservice:FormService) { }

  ngOnInit(): void {
    this.CreateUserdata();
   
   }

  public showpassword(evnt:any){

    if(evnt.target.checked ){
      this.Password = "text";
    }else{
      this.Password = "password";
    }

  }

    public  Createformdata = new FormGroup({
          name:     new FormControl(''),
          email:    new FormControl(''),
          password: new FormControl(''),
      });

  public CreateUserdata(){

    this.formservice.postdata(this.Createformdata.value).subscribe(data =>{
    this.Createformdata.reset();

    }, (err) =>{
      console.log("unable user data" + err)
    });
    
  
    
 
  }


 

  






}

