import type { CartItem } from "../pages/products/[id]";
import { CART_ITEMS } from "../pages/products/[id]";

export const updateCartItemNum = (id: string, code: number) => {
  const cartItems: CartItem[] = JSON.parse(localStorage.getItem(CART_ITEMS) as string);
  const item = cartItems.find((item) => item.product.id === id) as CartItem;
  if (code) {
    item.quantity++;
  } else {
    item.quantity--;
  }
  localStorage.setItem(CART_ITEMS, JSON.stringify(cartItems));
};
