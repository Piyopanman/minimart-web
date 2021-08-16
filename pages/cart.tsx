import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { useRecoilState } from "recoil";
import { cartItemNumState } from "../recoil/atoms/cartItem";
import { useState, useEffect } from "react";
import type { CartItem } from "./products/[id]";
import { CART_ITEMS } from "./products/[id]";
import Item from "../components/Item";
import { getCartItemNum } from "../utils/getCartItemNum";
import { totalPriceState } from "../recoil/atoms/totalPrice";

const CartPage: NextPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  const [cartItemNum, setCartItemNum] = useRecoilState(cartItemNumState);

  useEffect(() => {
    const items: CartItem[] = JSON.parse(localStorage.getItem(CART_ITEMS) as string);
    setCartItems(items);
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    setTotalPrice(total);
    setCartItemNum(getCartItemNum());
  }, []);

  const submit = () => {
    alert("注文しました");
    localStorage.removeItem(CART_ITEMS);
    setCartItemNum(0);
    router.push("/");
  };

  return (
    <Layout cartItemNum={cartItemNum}>
      {cartItems?.map((item, index) => (
        <Item key={index} cartItem={item} />
      ))}
      <h1>合計金額：{totalPrice}円</h1>
      <button onClick={submit}>注文する</button>
    </Layout>
  );
};

export default CartPage;
