import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';
import { User, Order, Bill } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  // Health Check
  checkBackendHealth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/menu-items/health`).pipe(
      catchError(() => of({ status: 'Backend is not responding' }))
    );
  }

  // Menu Items
  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.apiUrl}/menu-items`).pipe(
      catchError(() => of([]))
    );
  }

  getMenuItemsByCategory(category: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.apiUrl}/menu-items/category/${category}`).pipe(
      catchError(() => of([]))
    );
  }

  createMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.post(`${this.apiUrl}/menu-items`, menuItem).pipe(
      catchError(() => of(null))
    );
  }

  // Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      catchError(() => of([]))
    );
  }

  updateUserStatus(userId: number, status: string): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${userId}/status`, { status }).pipe(
      catchError(() => of(null))
    );
  }

  // Orders
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`).pipe(
      catchError(() => of([]))
    );
  }

  createOrder(order: Partial<Order>): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, order).pipe(
      catchError(() => of(null))
    );
  }

  // Bills
  getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.apiUrl}/bills`).pipe(
      catchError(() => of([]))
    );
  }

  getBillDetails(billId: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}/bills/${billId}`).pipe(
      catchError(() => of(null))
    );
  }

  cancelBill(billId: number): Observable<Bill> {
    return this.http.patch<Bill>(`${this.apiUrl}/bills/${billId}/cancel`, {}).pipe(
      catchError(() => of(null))
    );
  }
}