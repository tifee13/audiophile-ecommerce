import { create } from 'zustand';

export type CartItem = {
  productId: string;
  shortName: string;
  price: number;
  image: string; 
  quantity: number;
};

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

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
        return { items: updatedItems };
      } else {
        return { items: [...state.items, item] };
      }
    }),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.productId !== productId) };
      }
      return {
        items: state.items.map((i) =>
          i.productId === productId ? { ...i, quantity } : i
        ),
      };
    }),

  clearCart: () => set({ items: [] }),

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));