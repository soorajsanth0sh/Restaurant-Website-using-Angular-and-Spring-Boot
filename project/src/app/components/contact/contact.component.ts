import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact-section">
      <div class="container">
        <h2 class="text-center contact-title">Contact Us</h2>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
          <div class="form-group">
            <label>Name</label>
            <input formControlName="name" type="text" class="form-control">
          </div>
          
          <div class="form-group">
            <label>Email</label>
            <input formControlName="email" type="email" class="form-control">
          </div>
          
          <div class="form-group">
            <label>Message</label>
            <textarea formControlName="message" rows="5" class="form-control"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary submit-button">Send Message</button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: #f9f9f9;
      padding: 4rem 0;
    }
    
    .contact-title {
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
    
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
    
    .form-group {
      margin-bottom: 1rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
    }
    
    .form-control {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    
    .submit-button {
      width: 100%;
      margin-top: 1rem;
    }
  `]
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}