import { CartItem } from "../pages/products/[id]";
import { CART_ITEMS } from "../pages/products/[id]";

export const getTotalPrice = (): number => {
  const items: CartItem[] = JSON.parse(localStorage.getItem(CART_ITEMS) as string);
  let total = 0;
  for (let item of items as CartItem[]) {
    total += item.product.price * item.quantity;
  }
  return total;
};
