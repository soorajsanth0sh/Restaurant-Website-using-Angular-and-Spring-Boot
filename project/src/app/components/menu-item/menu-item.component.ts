import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="menu-item">
      <div class="image-container">
        <img 
          [src]="item.image" 
          [alt]="item.name" 
          (error)="onImageError($event)"
          loading="lazy"
        >
      </div>
      <div class="menu-item-content">
        <h3>{{item.name}}</h3>
        <p>{{item.description}}</p>
        <p class="price">\${{item.price}}</p>
        
        <div class="order-controls">
          <input 
            type="number" 
            [(ngModel)]="quantity" 
            min="1" 
            max="10"
            class="quantity-input"
          >
          <button 
            (click)="addToCart()" 
            class="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
      transition: transform 0.2s;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .menu-item:hover {
      transform: translateY(-5px);
    }
    
    .image-container {
      width: 100%;
      height: 200px;
      overflow: hidden;
      position: relative;
    }
    
    .menu-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .menu-item:hover img {
      transform: scale(1.1);
    }
    
    .menu-item-content {
      padding: 1rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .menu-item-content h3 {
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .menu-item-content p {
      color: #666;
      flex-grow: 1;
    }
    
    .price {
      color: #e31837;
      font-weight: 600;
      margin-top: auto;
      font-size: 1.1rem;
    }

    .order-controls {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      align-items: center;
    }

    .quantity-input {
      width: 60px;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  `]
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500';
  }

  addToCart() {
    this.cartService.addToCart(this.item, this.quantity);
  }
}