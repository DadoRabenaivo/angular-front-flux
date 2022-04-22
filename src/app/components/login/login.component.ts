import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { MapRoute } from 'src/app/helpers/adapters';
import { Department } from 'src/app/interfaces/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string = "";
  public password : string = "";
  public errors : Array<string> = [];
  public departments : Array<Department> = [];

  constructor(private userService: UserService, private departmentService : DepartmentService, private router : Router) { }

  ngOnInit(): void {
    this.populateDepartments();
  }

  authenticate(): void {
    this.userService.authenticateUser(this.username, this.password).subscribe(
      (user) => {
        this.userService.setUser(user);
        this.router.navigate(['/'+ MapRoute(this.userService.authenticatedUser?.Department.Name)]);
      }
    )
  }

  populateDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (departments) => {
        this.departments = [...departments];
      }
    )
  }

}
