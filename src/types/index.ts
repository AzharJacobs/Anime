export interface Manga {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  genre: string;
  volume: number;
  rating: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  manga: Manga;
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}