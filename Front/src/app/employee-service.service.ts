import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { 
  }
  baseAddress:string='https://localhost:7143';
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }
  getData(){  
    return this.http.get(this.baseAddress+'/api/Employee');  //https://localhost:44352/ webapi host url  
  }  
  postData(formData:any){  
    return this.http.post(this.baseAddress+'/api/Employee',formData);  
  }  
  
  putData(id:any,formData:any){  
    return this.http.put(this.baseAddress+'/api/Employee/'+id,formData);  
  }  
  deleteData(id:any){  
    return this.http.delete(this.baseAddress+'/api/Employee/'+id);  
  }  
}
