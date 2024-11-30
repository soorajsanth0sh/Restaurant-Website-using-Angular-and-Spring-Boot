import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer style="background: #333; color: white; padding: 3rem 0; margin-top: 4rem;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          <div>
            <h3 style="margin-bottom: 1rem;">Gourmet Haven</h3>
            <p>Experience the finest dining in town</p>
          </div>
          <div>
            <h3 style="margin-bottom: 1rem;">Hours</h3>
            <p>Mon-Fri: 11am - 10pm</p>
            <p>Sat-Sun: 10am - 11pm</p>
          </div>
          <div>
            <h3 style="margin-bottom: 1rem;">Contact</h3>
            <p>123 Gourmet Street</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@gourmethaven.com</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #555;">
          <p>&copy; 2024 Gourmet Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}