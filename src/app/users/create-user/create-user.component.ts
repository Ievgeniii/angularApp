import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.addUser({
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email
    })
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
