import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  departments: string[] = ['HR', 'FINANCE', 'SALES'];
  genders: string[] = ['MALE', 'FEMALE'];
  employeeForm: any;
  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit() {
    /* let employee = {
       firstName: "anisha",
       lastName: "goel",
       dateOfBirth: "25-05-1989",
       gender: "MALE",
       department: "HR"
     }
     */
    this.initForm();
    
  }
  initForm()
  {
    this.employeeForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      gender: new FormControl(this.genders[0]),
      department: new FormControl(this.departments[0])
    });
  }

  onSubmit(employeeFormData:Employee) {
    this.employeeService.addEmployee(employeeFormData);
    this.initForm();
  }
}
