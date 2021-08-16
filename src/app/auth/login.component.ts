import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isValid: boolean;
  user: User ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  submitLoginForm(loginForm: User): void {
    this.isValid = this.loginService.validUser(loginForm);
    if (this.isValid) {
    this.user =JSON.parse(sessionStorage.getItem('user'));
      if(this.user.type=="admin"){
      this.router.navigateByUrl('/list');
    }
      else{
        this.router.navigateByUrl('/add');
      }
      sessionStorage.setItem('isLoggedIn', 'true');
    } else {
      this.router.navigateByUrl('/auth');
      sessionStorage.setItem('isLoggedIn', 'false');
      this.loginForm.reset();
    }
  }
}
