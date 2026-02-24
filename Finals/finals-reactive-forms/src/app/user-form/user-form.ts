import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserFormComponent {
  userModel = { username: '', email: '' };

  // Add these for the modal
  showModal = false;
  submittedData: any = null;

  onFormSubmit(form: any) {
    if (form.valid) {
      this.submittedData = { ...this.userModel }; // Clone the data
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
