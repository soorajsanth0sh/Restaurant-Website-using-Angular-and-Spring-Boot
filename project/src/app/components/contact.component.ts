import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section style="background: #f9f9f9;">
      <div class="container" style="max-width: 600px;">
        <h2 class="text-center" style="margin-bottom: 2rem;">Contact Us</h2>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 15px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem;">Name</label>
            <input formControlName="name" type="text" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
          </div>
          
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem;">Email</label>
            <input formControlName="email" type="email" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
          </div>
          
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem;">Message</label>
            <textarea formControlName="message" rows="5" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
        </form>
      </div>
    </section>
  `
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
      // Here you would typically send the form data to a server
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}