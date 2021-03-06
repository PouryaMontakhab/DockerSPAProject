import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule }    from '@angular/common/http';  
import { EmployeeServiceService} from './employee-service.service';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule  
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
