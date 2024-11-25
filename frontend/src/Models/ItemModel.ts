export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  sold: number;
}

export interface CartItemModel {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  quantity: number;
}
