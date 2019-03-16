import { Component, OnInit } from '@angular/core';
import { SpringAppService } from 'src/app/services/spring-app.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: User[];
  user: User;
  fn: string;
  ln: string;
  email: string;
  pw: string;
  pref: number[] = [0, 0, 0, 0];

  constructor(private saService: SpringAppService) { }

  ngOnInit() {
    const images = document.querySelectorAll('.pref-img');
    images.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.classList.contains('selected')) {
          element.classList.remove('selected');
        } else {
          element.classList.add('selected');
        }
      });
  });
  }

  getAllUsers() {
    this.saService.getUsers().subscribe(
      resp => {
        if (resp != null) {
          this.users = resp;
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  checkEmail() {
    this.saService.getUserByEmail(this.email).subscribe(
      checkEmailResp => {
        if (checkEmailResp != null) {
          this.user = checkEmailResp;
          console.log(this.user);
          alert('Woops! That email is already in use.\nSure you don\'t already have an account?');
        } else {
          const user = new User(this.fn, this.ln, this.email, this.pw, this.pref.toString());
          // user.fn = this.fn;
          // user.ln = this.ln;
          // user.email = this.email;
          // user.password = this.pw;
          // user.pref = this.pref.toString();
          this.saService.addUser(user).subscribe(
            createUserResp => {
              if (createUserResp != null) {
                alert('Account Creation Succeeded!');
              } else {
                alert('Account Creation failed! Please try again.');
              }
            }
          );
        }
      }
    );
  }

  modPreference(value: number) {
    if (this.pref[value - 1] === 0) {
      this.pref[value - 1] = value;
    } else {
      this.pref[value - 1] = 0;
    }
    console.log(this.pref);
  }

}
