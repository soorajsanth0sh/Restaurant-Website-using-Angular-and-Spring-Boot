import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="user-management">
      <div class="container">
        <h2 class="section-title">User Management</h2>
        
        <div class="filters">
          <input 
            type="text" 
            [(ngModel)]="searchTerm"
            (input)="filterUsers()"
            placeholder="Search users..."
            class="search-input"
          >
        </div>
        
        <div class="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (user of filteredUsers; track user.id) {
                <tr>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.role}}</td>
                  <td>
                    <span [class]="'status-badge ' + user.status">
                      {{user.status}}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-sm" (click)="pingUser(user)">
                      Ping User
                    </button>
                    <button class="btn btn-sm btn-danger" (click)="toggleUserStatus(user)">
                      {{user.status === 'active' ? 'Deactivate' : 'Activate'}}
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user-management {
      padding: 2rem 0;
    }
    
    .section-title {
      margin-bottom: 2rem;
    }
    
    .filters {
      margin-bottom: 2rem;
    }
    
    .search-input {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100%;
      max-width: 300px;
    }
    
    .users-table {
      overflow-x: auto;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    .status-badge {
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    
    .status-badge.active {
      background: #4CAF50;
      color: white;
    }
    
    .status-badge.inactive {
      background: #f44336;
      color: white;
    }
    
    .btn-sm {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      margin-right: 0.5rem;
    }
    
    .btn-danger {
      background: #f44336;
    }
  `]
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  ngOnInit() {
    // Simulate fetching users
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active' },
      { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin', status: 'active' }
    ];
    this.filteredUsers = [...this.users];
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  pingUser(user: User) {
    alert(`Notification sent to ${user.name}`);
  }

  toggleUserStatus(user: User) {
    user.status = user.status === 'active' ? 'inactive' : 'active';
  }
}