export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
  isDemo: true;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
