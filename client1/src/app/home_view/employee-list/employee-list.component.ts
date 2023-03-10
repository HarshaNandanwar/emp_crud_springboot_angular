import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/service/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }
   

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
   this.employeeService.getEmployeeList().subscribe(data=>{
    this.employees=data;
   },
   error => { 
    console.log('oops', error)
  })
  }

  employeeDetails(id: number){
  this.router.navigate(['employees-details',id])
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id])
  }

  deleteEmployee(id: number){
   this.employeeService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
    this.getEmployees();
   },
   error => {  
    console.log('oops', error)
  })
  }
}
