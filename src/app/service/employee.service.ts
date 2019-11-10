import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee) {
    this.http.post<Number>("http://localhost:8080/employees/", employee).subscribe(data => {
      console.log(data);
      window.alert('record saved successfully');
    })
  }
  getAllEmployees() {
    let url = "http://localhost:8080/employees/ASC";
    return this.http.get<Employee[]>(url);
  }

}
