import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users = this.userService.users;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  removeUser(user) {
    this.userService.removeUser(user);
  }
}
