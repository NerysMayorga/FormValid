import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormValid';
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('AppComponent::constructor');
    this.createForm();
}
createForm(): void {
  console.log('AppComponent::createForm');
  this.angForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(5)]],
    surname: ['', Validators.required],
    edad: [0, Validators.required],
    web: ['', Validators.required],
  });

  const newLocal = 'name';
  this.angForm.controls[newLocal].valueChanges.subscribe(data => {
    console.log(data);
  });
}
onSubmit(): void {
  if (this.angForm.valid) {
    console.log(this.angForm.value);
  } else {
    alert('ERROR!');
  }
}
}
