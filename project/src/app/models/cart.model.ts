export interface CartItem {
  menuItem: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}