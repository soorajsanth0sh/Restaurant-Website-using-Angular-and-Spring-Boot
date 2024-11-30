import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h3>Gourmet Haven</h3>
            <p>Experience the finest dining in town</p>
          </div>
          <div class="footer-section">
            <h3>Hours</h3>
            <p>Mon-Fri: 11am - 10pm</p>
            <p>Sat-Sun: 10am - 11pm</p>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p>123 Gourmet Street</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info&#64;gourmethaven.com</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Gourmet Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #333;
      color: white;
      padding: 3rem 0;
      margin-top: 4rem;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .footer-section h3 {
      margin-bottom: 1rem;
    }
    
    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #555;
    }
  `]
})
export class FooterComponent {}