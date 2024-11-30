import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <header class="header">
      <div class="container header-content">
        <h1 class="logo">Gourmet Haven</h1>
        <nav>
          <a routerLink="/" class="nav-link">Home</a>
          <a routerLink="/menu" class="nav-link">Menu</a>
          <a routerLink="/contact" class="nav-link">Contact</a>
          @if (isAdmin()) {
            <a routerLink="/admin" class="nav-link">Admin</a>
          }
          <a routerLink="/cart" class="nav-link cart-link">
            Cart
            @if (cartItemCount > 0) {
              <span class="cart-badge">{{cartItemCount}}</span>
            }
          </a>
          @if (!isLoggedIn()) {
            <button (click)="login()" class="btn btn-primary">Login</button>
          } @else {
            <button (click)="logout()" class="btn btn-outline">Logout</button>
          }
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }
    
    .logo {
      font-size: 1.5rem;
      color: #e31837;
    }
    
    .nav-link {
      margin: 0 1rem;
      text-decoration: none;
      color: #333;
      transition: color 0.2s;
    }
    
    .nav-link:hover {
      color: #e31837;
    }

    .cart-link {
      position: relative;
    }

    .cart-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #e31837;
      color: white;
      border-radius: 50%;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
      margin-left: 1rem;
    }

    .btn-primary {
      background: #e31837;
      color: white;
      border: none;
    }

    .btn-outline {
      background: transparent;
      border: 1px solid #e31837;
      color: #e31837;
    }

    .btn:hover {
      opacity: 0.9;
    }
  `]
})
export class HeaderComponent {
  cartItemCount: number = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.cartService.getCart().subscribe(cart => {
      this.cartItemCount = cart.items.reduce((count, item) => count + item.quantity, 0);
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  login(): void {
    this.authService.login('admin@example.com', 'password');
  }

  logout(): void {
    this.authService.logout();
  }
}