import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="hero">
      <div class="container">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Welcome to Gourmet Haven</h1>
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">Experience culinary excellence in every bite</p>
        <a href="/menu" class="btn btn-primary">View Our Menu</a>
      </div>
    </div>
    
    <section style="background: #f9f9f9;">
      <div class="container text-center">
        <h2 style="margin-bottom: 2rem;">Why Choose Us</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          <div>
            <h3>Fresh Ingredients</h3>
            <p>We use only the finest, locally-sourced ingredients</p>
          </div>
          <div>
            <h3>Expert Chefs</h3>
            <p>Our master chefs create culinary masterpieces</p>
          </div>
          <div>
            <h3>Cozy Atmosphere</h3>
            <p>Enjoy your meal in our warm, welcoming environment</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}