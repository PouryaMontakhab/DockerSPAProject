import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';   


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  constructor(private employeeService: EmployeeServiceService) {}

  data: any;  
  empForm!: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";  

  ngOnInit(): void {  
    this.getdata();  
  
    this.empForm = new FormGroup({  
      empId: new FormControl(null),  
      FirstName: new FormControl("",[Validators.required]),        
      LastName: new FormControl("",[Validators.required]),  
      Email:new FormControl("",[Validators.required]),  
    })    
  }
  
  getdata() {  
    this.employeeService.getData().subscribe((data: any) => {  
      this.data = data;  
    })  
  }  
  deleteData(id:any) {  
    this.employeeService.deleteData(id).subscribe((data: any) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  
  Save() {   
    this.submitted = true;  
    
     if (this.empForm.invalid) {  
            return;  
     }  
    this.employeeService.postData(this.empForm.value).subscribe((data: any) => {  
      this.data = data;  
      this.resetFrom();  
  
    })  
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.empForm.invalid) {  
     return;  
    }        
    this.employeeService.putData(this.empForm.value.empId,this.empForm.value).subscribe((data: any) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditData(Data:any) {  
    this.empForm.controls["empId"].setValue(Data.empId);      
    this.empForm.controls["FirstName"].setValue(Data.FirstName);      
    this.empForm.controls["LastName"].setValue(Data.LastName);  
    this.empForm.controls["Email"].setValue(Data.Email);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getdata();  
    this.empForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  }  
}
