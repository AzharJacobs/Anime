import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Manga, CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (manga: Manga) => void;
  removeFromCart: (mangaId: string) => void;
  updateQuantity: (mangaId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (manga: Manga) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.manga.id === manga.id);
      if (existingItem) {
        return prev.map(item =>
          item.manga.id === manga.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { manga, quantity: 1 }];
    });
  };

  const removeFromCart = (mangaId: string) => {
    setCartItems(prev => prev.filter(item => item.manga.id !== mangaId));
  };

  const updateQuantity = (mangaId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(mangaId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.manga.id === mangaId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.manga.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};