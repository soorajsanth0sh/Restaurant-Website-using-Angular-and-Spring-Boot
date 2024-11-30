import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="cart-page">
      <div class="container">
        <h2>Your Cart</h2>
        
        @if (cart.items.length === 0) {
          <div class="empty-cart">
            <p>Your cart is empty</p>
            <a routerLink="/menu" class="btn btn-primary">View Menu</a>
          </div>
        } @else {
          <div class="cart-items">
            @for (item of cart.items; track item.menuItem.id) {
              <div class="cart-item">
                <img [src]="item.menuItem.image" [alt]="item.menuItem.name">
                <div class="item-details">
                  <h3>{{item.menuItem.name}}</h3>
                  <p class="price">\${{item.menuItem.price}}</p>
                </div>
                <div class="quantity-controls">
                  <input 
                    type="number" 
                    [ngModel]="item.quantity"
                    (ngModelChange)="updateQuantity(item.menuItem.id, $event)"
                    min="1" 
                    max="10"
                  >
                  <button 
                    (click)="removeItem(item.menuItem.id)"
                    class="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            }
            
            <div class="cart-summary">
              <h3>Order Summary</h3>
              <p>Total: <span class="total">\${{cart.total.toFixed(2)}}</span></p>
              <button 
                (click)="checkout()"
                class="btn btn-primary checkout-btn"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .cart-page {
      padding: 2rem 0;
    }

    .empty-cart {
      text-align: center;
      padding: 3rem;
    }

    .cart-items {
      max-width: 800px;
      margin: 0 auto;
    }

    .cart-item {
      display: flex;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #eee;
      gap: 1rem;
    }

    .cart-item img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
    }

    .item-details {
      flex-grow: 1;
    }

    .price {
      color: #e31837;
      font-weight: 600;
    }

    .quantity-controls {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .quantity-controls input {
      width: 60px;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .cart-summary {
      margin-top: 2rem;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }

    .total {
      font-size: 1.2rem;
      font-weight: 600;
      color: #e31837;
    }

    .checkout-btn {
      width: 100%;
      margin-top: 1rem;
    }

    .btn-danger {
      background: #dc3545;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .btn-danger:hover {
      background: #c82333;
    }
  `]
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [], total: 0 };

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  updateQuantity(itemId: number, quantity: number) {
    this.cartService.updateQuantity(itemId, quantity);
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  checkout() {
    // Implement checkout logic
    alert('Thank you for your order! Total: $' + this.cart.total.toFixed(2));
    this.cartService.clearCart();
  }
}