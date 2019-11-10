import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:Employee[]=[];
  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees()
  {
    this.employeeService.getAllEmployees().subscribe(data=>{
    this.employees=data;
   });
  }
}
