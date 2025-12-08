import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
//import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
httpData: any;
 private apiUrl = "http://localhost:8080/employees";
 constructor( private http: HttpClient) {   }


 // getEmployees (){
//    return this.http.get<[]>(this.apiUrl);

//this.http.get<any>(this.apiUrl).subscribe(data => {
  //    this.httpData = data;
  // ;

    
  //  });

  //  return this.httpData;
  //}

getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
