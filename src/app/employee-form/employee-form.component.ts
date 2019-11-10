import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  departments:string[] = ['HR','FINANCE','SALES'];
  genders:string[] = ['MALE','FEMALE'];
  constructor() { }

  ngOnInit() {
  }

}
