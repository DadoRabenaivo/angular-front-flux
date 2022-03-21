import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string = "";
  public password : string = "";
  public errors : Array<string> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.userService.authenticateUser(this.username, this.password).subscribe(
      (data : User) => {
        
      }
    )
  }

}
