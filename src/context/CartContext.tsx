import React, { useMemo, useReducer } from "react";
import type { MenuItem } from "../data/menu";
import { CartContext, type CartContextValue } from "./CartContextBase";
import { toast } from "react-hot-toast";

export type CartItem = {
  title: string;
  description?: string;
  price: number;
  image?: string;
  quantity: number;
  totalPrice: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: { menuItem: MenuItem; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { index: number } }
  | { type: "UPDATE_QUANTITY"; payload: { index: number; quantity: number } }
  | { type: "CLEAR" };

const getTotalItemPrice = (price: number, quantity: number) =>
  Number((price * quantity).toFixed(2));

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { menuItem, quantity } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.title === menuItem.title
      );
      if (existingIndex !== -1) {
        const next = state.items.map((item, index) =>
          index === existingIndex
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalPrice: getTotalItemPrice(
                  item.price,
                  item.quantity + quantity
                ),
              }
            : item
        );
        return { ...state, items: next };
      }
      const item: CartItem = {
        title: menuItem.title,
        description: menuItem.description,
        price: menuItem.price,
        image: menuItem.image,
        quantity,
        totalPrice: getTotalItemPrice(menuItem.price, quantity),
      };
      return { ...state, items: [...state.items, item] };
    }
    case "REMOVE_ITEM": {
      const next = [...state.items];
      next.splice(action.payload.index, 1);
      return { ...state, items: next };
    }
    case "UPDATE_QUANTITY": {
      const next = state.items.map((it, i) =>
        i === action.payload.index
          ? {
              ...it,
              quantity: action.payload.quantity,
              totalPrice: getTotalItemPrice(it.price, action.payload.quantity),
            }
          : it
      );
      return { ...state, items: next };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

// Context moved to CartContextBase to satisfy fast-refresh boundaries

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const preTaxTotal = useMemo(
    () => state.items.reduce((sum, it) => sum + (it.totalPrice || 0), 0),
    [state.items]
  );
  const totalQuantity = useMemo(
    () => state.items.reduce((sum, it) => sum + (it.quantity || 0), 0),
    [state.items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      preTaxTotal,
      totalQuantity,
      addItem: (menuItem, quantity) => {
        dispatch({ type: "ADD_ITEM", payload: { menuItem, quantity } });
        const count = Math.max(1, Number(quantity) || 1);
        toast.success(`${count} × ${menuItem.title} added to cart`);
      },
      removeItem: (index) => {
        const removed = state.items[index];
        dispatch({ type: "REMOVE_ITEM", payload: { index } });
        if (removed) {
          toast(`Removed ${removed.title}`, { icon: "🗑️" });
        } else {
          toast(`Removed item`, { icon: "🗑️" });
        }
      },
      updateQuantity: (index, quantity) => {
        const item = state.items[index];
        dispatch({ type: "UPDATE_QUANTITY", payload: { index, quantity } });
        const q = Math.max(1, Number(quantity) || 1);
        if (item) {
          toast(`Updated ${item.title} to ${q}`, { icon: "🔄" });
        } else {
          toast(`Quantity updated to ${q}`, { icon: "🔄" });
        }
      },
      clear: () => {
        dispatch({ type: "CLEAR" });
        toast("Cart cleared", { icon: "🧹" });
      },
    }),
    [state.items, preTaxTotal, totalQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Note: useCart hook moved to its own file to satisfy fast-refresh
