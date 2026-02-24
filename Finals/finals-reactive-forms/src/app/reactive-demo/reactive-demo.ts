import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css'
})
export class ReactiveDemo {
  roles = ['Admin', 'User', 'Guest'];
  genders = ['Male', 'Female', 'Other'];
  statuses = ['Permanent', 'Probationary'];

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['Admin', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['', [Validators.maxLength(200)]]
    });
  }

  showModal = false;
  submittedData: any = null;

  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value; // Capture the values
      this.showModal = true;                // Open the modal
    } else {
      this.form.markAllAsTouched();
    }
  }

  closeModal() {
    this.showModal = false;
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
