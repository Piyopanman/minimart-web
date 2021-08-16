import type { CartItem } from "../pages/products/[id]";
import { CART_ITEMS } from "../pages/products/[id]";

export const getCartItemNum = () => {
  let cartItemNum = 0;
  const cartItems: CartItem[] = JSON.parse(localStorage.getItem(CART_ITEMS) as string);
  for (let item of cartItems) {
    cartItemNum += item.quantity;
  }
  return cartItemNum;
};
