import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <section>
      <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem;">Our Menu</h2>
        <div class="menu-grid">
          @for (item of menuItems; track item.id) {
            <div class="menu-item">
              <img [src]="item.image" [alt]="item.name">
              <div class="menu-item-content">
                <h3>{{item.name}}</h3>
                <p>{{item.description}}</p>
                <p style="color: #e31837; font-weight: 600; margin-top: 1rem;">\${{item.price}}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class MenuComponent {
  menuItems = [
    {
      id: 1,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herbs and lemon',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500'
    },
    {
      id: 2,
      name: 'Beef Tenderloin',
      description: 'Premium cut with red wine reduction',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'
    },
    {
      id: 3,
      name: 'Mushroom Risotto',
      description: 'Creamy Arborio rice with wild mushrooms',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500'
    }
  ];
}