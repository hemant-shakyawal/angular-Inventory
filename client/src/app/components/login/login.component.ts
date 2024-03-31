import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  message = '';

  constructor(
    private fb: FormBuilder,
    public router: Router,
   // private loginService: AppserviceService
  ) {}
  ngOnInit(): void {
    this.submitForm();
  }

  submitForm() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  isFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field)?.valid &&
        this.loginForm.get(field)?.touched) ||
      this.loginForm.get(field)?.untouched
    );
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      // this.loginService.login(formValue.email, formValue.password).subscribe({
      //   next: (res) => {
      //     console.log(res);
      //     localStorage.setItem('token', res.token);

      //     this.router.navigate(['/dashboard']);
      //   },
      //   error: (err) => {
      //     this.message = 'Wrong username or password!!';
      //   },
      // });

      // localStorage.setItem('isLoggedin', 'true');

      // sessionStorage.setItem('user', 'isAuthenticated');
    }
  }
}
