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
  email: string;
  pw: string;
  pref: number[] = [0, 0, 0, 0];

  constructor(private saService: SpringAppService) { }

  ngOnInit() {
    const images = document.querySelectorAll('.pref-img');
    images.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.classList.contains('selected')){
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
        if (resp != null){
          this.users = resp;
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  checkEmail() {
    this.saService.getUserByEmail(this.email).subscribe(
      resp => {
        if (resp != null){
          this.user = resp;
          console.log(this.user);
          alert('Woops! That email is already in use.\nSure you don\'t already have an account?');
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  addPreference(value: number) {
    if (this.pref[value - 1] === 0) {
      this.pref[value - 1] = value;
    } else {
      this.pref[value - 1] = 0;
    }
    console.log(this.pref);
  }

}
