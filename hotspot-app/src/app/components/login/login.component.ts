import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { SpringAppService } from 'src/app/services/spring-app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'protractor';
import { WebAppService } from 'src/app/services/web-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  email: string;
  pw: string;

  constructor(
    private saService: SpringAppService,
    private waService: WebAppService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  checkCredentials() {
    this.saService.getUserByEmail(this.email).subscribe(
      resp => {
        if (resp == null) {
          alert('Email does not exist!\nAre you sure you made an account?');
        } else {
          this.user = resp;
          if (this.pw !== this.user.password) {
            alert('Incorrect password!');
          } else {
            this.waService.user = this.user;
            this.router.navigate([`/event`]);
          }
        }
      }
    );
  }

}
