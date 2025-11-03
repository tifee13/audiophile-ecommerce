// app/_store/cartStore.ts
import { create } from 'zustand';

// Define the type for a single cart item
export type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string; // Add image for cart modal
  quantity: number;
};

// Define the store's state and actions
type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,

  // Action: Add an item (or update quantity if it exists)
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        // If item exists, update its quantity
        const updatedItems = state.items.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
        return { items: updatedItems };
      } else {
        // If item is new, add it to the cart
        return { items: [...state.items, item] };
      }
    }),

  // Action: Remove an item
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    })),

  // Action: Update quantity
  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        // If quantity is 0 or less, remove the item
        return { items: state.items.filter((i) => i.productId !== productId) };
      }
      // Otherwise, update the quantity
      return {
        items: state.items.map((i) =>
          i.productId === productId ? { ...i, quantity } : i
        ),
      };
    }),

  // Action: Clear the cart
  clearCart: () => set({ items: [] }),

  // Action: Toggle the cart modal
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));