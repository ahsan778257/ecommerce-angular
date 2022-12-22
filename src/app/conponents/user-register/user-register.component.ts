import { Component, OnInit } from '@angular/core';


interface User{
  username:string;
  email:string;
  password:string;




}



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user: User ={
    
    username:'',
    email: '',
    password: ''

    
  }





  constructor() { }

  ngOnInit(): void {
  }


  public userRegister(){
    console.log(this.user);

  }


}
