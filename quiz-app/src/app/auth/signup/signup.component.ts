import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  errors: string[] = [];

  signUpForm = this.fb.group(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    },
    { validator: MustMatch('password', 'confirm_password') }
  );

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}

  onSignUp() {
    this.isLoading = true;
    this.authService.signup(this.signUpForm.value).subscribe(
      () => {
        this.isLoading = false;
        this.signUpForm.reset();
        this.goToSignIn();
      },
      errors => {
        this.isLoading = false;
        this.errors = errors;
      }
    );
  }

  goToSignIn() {
    this.router.navigate(['auth', 'signin']);
  }
}
