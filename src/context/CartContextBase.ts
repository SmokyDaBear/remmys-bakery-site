import { createContext } from "react";

export type CartContextValue = {
  items: Array<{
    title: string;
    description?: string;
    price: number;
    image?: string;
    quantity: number;
    totalPrice: number;
  }>;
  preTaxTotal: number;
  totalQuantity: number;
  addItem: (
    menuItem: {
      title: string;
      description?: string;
      price: number;
      image?: string;
    },
    quantity: number
  ) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clear: () => void;
};

export const CartContext = createContext<CartContextValue | undefined>(
  undefined
);
