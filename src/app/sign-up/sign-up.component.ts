import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user: User = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };

  onSubmit(signUpForm: NgForm) {
    if (signUpForm.valid) {
      console.log("Demande d'inscription envoyée");
    }
  }

}
