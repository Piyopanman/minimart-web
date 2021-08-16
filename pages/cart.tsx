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

const CartPage: NextPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemNum, setCartItemNum] = useRecoilState(cartItemNumState);

  useEffect(() => {
    const func = async () => {
      const items: CartItem[] = await JSON.parse(localStorage.getItem(CART_ITEMS) as string);
      setCartItems(items);
      let total = 0;
      for (let item of items as CartItem[]) {
        total += item.product.price * item.quantity;
        console.log(total);
      }
      setTotalPrice(total);
      setCartItemNum(getCartItemNum());
    };
    func();
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
