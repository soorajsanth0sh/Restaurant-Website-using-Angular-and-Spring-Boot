import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero">
      <div class="container">
        <h1 class="hero-title">Welcome to Gourmet Haven</h1>
        <p class="hero-subtitle">Experience authentic Indian cuisine at its finest</p>
        <a routerLink="/menu" class="btn btn-primary">View Our Menu</a>
      </div>
    </div>
    
    <section class="features">
      <div class="container text-center">
        <h2 class="features-title">Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature">
            <h3>Authentic Spices</h3>
            <p>We use traditional Indian spices and cooking methods</p>
          </div>
          <div class="feature">
            <h3>Expert Chefs</h3>
            <p>Our master chefs bring years of experience from India</p>
          </div>
          <div class="feature">
            <h3>Warm Atmosphere</h3>
            <p>Experience the warmth of Indian hospitality</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 80vh;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: white;
      text-align: center;
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                        url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200');
    }
    
    .hero-title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    
    .features {
      background: #f9f9f9;
      padding: 4rem 0;
    }
    
    .features-title {
      margin-bottom: 2rem;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .feature {
      padding: 1rem;
    }
  `]
})
export class HomeComponent {}