import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="admin-dashboard">
      <div class="container">
        <h1 class="dashboard-title">Admin Dashboard</h1>
        
        <div class="dashboard-grid">
          <div class="dashboard-card">
            <h3>Categories</h3>
            <p>Manage menu categories</p>
            <a routerLink="/admin/categories" class="btn btn-primary">Manage Categories</a>
          </div>
          
          <div class="dashboard-card">
            <h3>Products</h3>
            <p>Manage menu items</p>
            <a routerLink="/admin/products" class="btn btn-primary">Manage Products</a>
          </div>
          
          <div class="dashboard-card">
            <h3>Orders</h3>
            <p>View and manage orders</p>
            <a routerLink="/admin/orders" class="btn btn-primary">Manage Orders</a>
          </div>
          
          <div class="dashboard-card">
            <h3>Bills</h3>
            <p>View and manage bills</p>
            <a routerLink="/admin/bills" class="btn btn-primary">Manage Bills</a>
          </div>
          
          <div class="dashboard-card">
            <h3>Users</h3>
            <p>Manage user accounts</p>
            <a routerLink="/admin/users" class="btn btn-primary">Manage Users</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      padding: 2rem 0;
    }
    
    .dashboard-title {
      margin-bottom: 2rem;
      font-size: 2rem;
      color: #333;
    }
    
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .dashboard-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
    
    .dashboard-card h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }
    
    .dashboard-card p {
      color: #666;
      margin-bottom: 1rem;
    }
  `]
})
export class AdminDashboardComponent {}