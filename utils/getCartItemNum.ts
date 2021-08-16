import type { CartItem } from "../pages/products/[id]";
import { CART_ITEMS } from "../pages/products/[id]";

export const getCartItemNum = (): number => {
  const cartItems: CartItem[] = JSON.parse(localStorage.getItem(CART_ITEMS) || "[]");
  return cartItems.reduce((sum, item) => sum + item.quantity, 0);
};
