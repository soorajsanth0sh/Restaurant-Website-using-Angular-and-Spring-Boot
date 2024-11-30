export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
}

export interface Order {
  id: number;
  userId: number;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface OrderItem {
  menuItemId: number;
  quantity: number;
  price: number;
}

export interface Bill {
  id: number;
  orderId: number;
  total: number;
  status: 'paid' | 'cancelled';
  createdAt: Date;
}