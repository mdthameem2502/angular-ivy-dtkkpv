import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  list: any = [{}];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', false],
      Phone: ['', false],
      dob: ['', false],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onRegister() {
    let pushObj = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      phone: this.registerForm.get('Phone').value,
      company: this.registerForm.get('company').value,
      dob: this.registerForm.get('dob').value,
    };
    localStorage.setItem('pushObj', JSON.stringify(pushObj));
    let fNameLoc = JSON.parse(localStorage.getItem('pushObj'));
    this.list.push(pushObj);
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
