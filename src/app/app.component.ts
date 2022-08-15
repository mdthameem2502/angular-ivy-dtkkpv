import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  list: any = {
    FirstName: 'sss',
    LastName: 'dshjk',
    Email: 'abcd@gmail.com',
    Phone: 987456321,
    Company: 'Aegis',
    DOB: '25-01-1996',
  };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
