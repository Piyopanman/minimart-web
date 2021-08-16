import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProduct } from "../../lib/product";
import type { Product } from "../../lib/product";
import { Layout } from "../../components/Layout";

// カートに追加するデータの型
type CartItem = {
  product: Product; // 商品
  quantity: number; // 個数
};

const DetailPage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProduct(String(router.query.id)).then((product) => setProduct(product));
  }, [router.query.id]);

  const putItem = () => {
    const cartItems = "cartitems";
    if (localStorage.getItem(cartItems)) {
      let items: CartItem[] = JSON.parse(localStorage.getItem(cartItems) as string);
      items.push({ product: product as Product, quantity: 1 });
      localStorage.setItem(cartItems, JSON.stringify(items));
    } else {
      localStorage.setItem(cartItems, JSON.stringify([{ product: product, quantity: 1 }]));
    }
  };

  return (
    <Layout>
      <h1>{product?.name}</h1>
      <img src={product?.imageUrl} alt={product?.id} />
      <p>{product?.price}円</p>
      <h1>{product?.description}</h1>
      <button onClick={putItem}>カートに入れる</button>
    </Layout>
  );
};

export default DetailPage;
