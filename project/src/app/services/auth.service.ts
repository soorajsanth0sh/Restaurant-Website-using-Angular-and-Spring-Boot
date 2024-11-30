import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Promise<User> {
    // Simulated login - in production, this would make an API call
    return new Promise((resolve) => {
      const user: User = {
        id: 1,
        name: 'Admin User',
        email: email,
        role: 'admin',
        status: 'active'
      };
      this.currentUserSubject.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      resolve(user);
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}