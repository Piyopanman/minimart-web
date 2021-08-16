import { CartItem } from "../pages/products/[id]";
import { CART_ITEMS } from "../pages/products/[id]";

export const getTotalPrice = (): number => {
  const items: CartItem[] = JSON.parse(localStorage.getItem(CART_ITEMS) as string);
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
};
