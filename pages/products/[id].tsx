import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProduct } from "../../lib/product";
import type { Product } from "../../lib/product";
import { Layout } from "../../components/Layout";
import { useRecoilState } from "recoil";
import { cartItemNumState } from "../../recoil/atoms/cartItem";
import { getCartItemNum } from "../../utils/getCartItemNum";

// カートに追加するデータの型
export type CartItem = {
  product: Product; // 商品
  quantity: number; // 個数
};
export const CART_ITEMS = "cartitems";

const DetailPage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>();
  const [cartItemNum, setCartItemNum] = useRecoilState(cartItemNumState);

  useEffect(() => {
    getProduct(String(router.query.id)).then((product) => setProduct(product));
    setCartItemNum(getCartItemNum());
  }, [router.query.id]);

  const putItem = () => {
    if (localStorage.getItem(CART_ITEMS)) {
      let items: CartItem[] = JSON.parse(localStorage.getItem(CART_ITEMS) as string);
      const item = items.find((item) => item.product.id === product?.id);

      if (item) {
        item.quantity++;
      } else {
        items.push({ product: product as Product, quantity: 1 });
      }

      localStorage.setItem(CART_ITEMS, JSON.stringify(items));
    } else {
      localStorage.setItem(CART_ITEMS, JSON.stringify([{ product: product, quantity: 1 }]));
    }
    setCartItemNum((cartItemNum as number) + 1);
  };

  return (
    <Layout cartItemNum={cartItemNum as number}>
      <h1>{product?.name}</h1>
      <img src={product?.imageUrl} alt={product?.id} />
      <p>{product?.price}円</p>
      <h1>{product?.description}</h1>
      <button onClick={putItem}>カートに入れる</button>
    </Layout>
  );
};

export default DetailPage;
