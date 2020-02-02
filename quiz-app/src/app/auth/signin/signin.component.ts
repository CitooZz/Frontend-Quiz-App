import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  isLoading = false;
  errors = [];

  signInForm = this.fb.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}

  onSignIn() {
    this.errors = [];
    this.isLoading = true;
    this.authService.signin(this.signInForm.value).subscribe(
      () => {
        this.isLoading = false;
        this.signInForm.reset();
        this.router.navigate(['quiz']);
      },
      errors => {
        this.isLoading = false;
        this.errors = errors;
      }
    );
  }

  goToSignUp() {
    this.router.navigate(['auth', 'signup']);
  }
}
