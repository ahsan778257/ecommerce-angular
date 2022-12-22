import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './conponents/front-page/front-page.component';
import { WishMessageComponent } from './conponents/wish-message/wish-message.component';
import { ProductComponent } from './conponents/product/product.component';
import { FormBindingComponent } from './conponents/form-binding/form-binding.component';
import { AmountRangeComponent } from './conponents/amount-range/amount-range.component';
import { SmsAppComponent } from './conponents/sms-app/sms-app.component';
import { ShowPasswordComponent } from './conponents/show-password/show-password.component';
import { ThemSelectorComponent } from './conponents/them-selector/them-selector.component';
import { UserRegisterComponent } from './conponents/user-register/user-register.component';
import { EmployeeComponent } from './conponents/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './conponents/product-list/product-list.component';
import { NavbarAppComponent } from './conponents/navbar-app/navbar-app.component';
import { HomeComponent } from './conponents/home/home.component';
import { RailwayaComponent } from './railwaya/railwaya.component';
import { FormComponentComponent } from './conponents/form-component/form-component.component';
import { EditEmployeeComponentComponent } from './conponents/edit-employee-component/edit-employee-component.component';
import { CarousalComponent } from './conponents/carousal/carousal.component';
import { FooterComponent } from './conponents/footer/footer.component';
import { LoginComponent } from './conponents/login/login.component';
import { ProductDetailsComponent } from './conponents/product-details/product-details.component';
import { ContactComponent } from './conponents/contact/contact.component';
import { CartComponent } from './conponents/cart/cart.component';
import { CheckoutComponent } from './conponents/checkout/checkout.component';
import { AdminPanelComponent } from './conponents/admin-panel/admin-panel.component';






@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    WishMessageComponent,
    ProductComponent,
    FormBindingComponent,
    AmountRangeComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    ThemSelectorComponent,
    UserRegisterComponent,
    EmployeeComponent,
    ProductListComponent,
    NavbarAppComponent,
    HomeComponent,
    RailwayaComponent,
    FormComponentComponent,
    EditEmployeeComponentComponent,
    CarousalComponent,
    FooterComponent,
    LoginComponent,
    ProductDetailsComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    AdminPanelComponent,
  
    
    

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,    
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
