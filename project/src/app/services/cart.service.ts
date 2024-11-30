import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = { items: [], total: 0 };
  private cartSubject = new BehaviorSubject<Cart>(this.cart);

  getCart(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  addToCart(menuItem: MenuItem, quantity: number = 1): void {
    const existingItem = this.cart.items.find(
      item => item.menuItem.id === menuItem.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.items.push({
        menuItem: {
          id: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          image: menuItem.image
        },
        quantity
      });
    }

    this.updateCart();
  }

  removeFromCart(itemId: number): void {
    this.cart.items = this.cart.items.filter(
      item => item.menuItem.id !== itemId
    );
    this.updateCart();
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.cart.items.find(
      item => item.menuItem.id === itemId
    );
    if (item) {
      item.quantity = quantity;
      this.updateCart();
    }
  }

  clearCart(): void {
    this.cart = { items: [], total: 0 };
    this.cartSubject.next(this.cart);
  }

  private updateCart(): void {
    this.cart.total = this.cart.items.reduce(
      (total, item) => total + (item.menuItem.price * item.quantity),
      0
    );
    this.cartSubject.next({ ...this.cart });
  }
}