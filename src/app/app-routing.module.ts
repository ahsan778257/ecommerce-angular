import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './conponents/cart/cart.component';
import { CheckoutComponent } from './conponents/checkout/checkout.component';
import { ContactComponent } from './conponents/contact/contact.component';
import { EditEmployeeComponentComponent } from './conponents/edit-employee-component/edit-employee-component.component';
import { EmployeeComponent } from './conponents/employee/employee.component';
import { HomeComponent } from './conponents/home/home.component';
import { LoginComponent } from './conponents/login/login.component';
import { ProductDetailsComponent } from './conponents/product-details/product-details.component';
import { ProductListComponent } from './conponents/product-list/product-list.component';
import { UserRegisterComponent } from './conponents/user-register/user-register.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path:'signup', component:UserRegisterComponent},
  { path: 'details', component:ProductDetailsComponent},
  { path: 'checkout', component:CheckoutComponent},
  { path: 'cart', component:CartComponent},
  { path:'contact', component:ContactComponent},
  { path:'protfolio',component:ProductListComponent},
  { path:'edit/:employeeId', component:EditEmployeeComponentComponent},
  { path: 'delete/:deleteid', component:EmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
