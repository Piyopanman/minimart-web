import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { useEffect, useState } from "react";
import { getProduct } from "../../lib/product";
import type { Product } from "../../lib/product";
import { useRecoilState } from "recoil";
import { cartItemNumState } from "../../recoil/atoms/cartItem";
import { getCartItemNum } from "../../utils/getCartItemNum";
import { getOrder, Order } from "../../lib/order";

const OrderPage: NextPage = () => {
  const router = useRouter();
  const [cartItemNum, setCartItemNum] = useRecoilState(cartItemNumState);
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    setCartItemNum(getCartItemNum());
    const orderId = String(router.query.uuid);
    getOrder(orderId).then((order) => setOrder(order));
  }, [router.query.uuid]);

  return (
    <Layout cartItemNum={cartItemNum}>
      <h1>注文の詳細</h1>
      <p>注文日時：{order?.orderedAt}</p>
      <p>配達日時：{order?.deliveryDate}</p>
      <p>受け取り場所：{order?.pickupLocation.name}</p>
      <h1>注文した商品</h1>
      {order?.items.map((item, index) => (
        <div key={index}>
          <h2>
            {item.product.name} {item.product.price}円 {item.quantity}個
          </h2>
          <img src={item.product.imageUrl} alt={item.product.name} height="200px" />
        </div>
      ))}
      <h1>合計金額：{order?.totalAmount}円</h1>
    </Layout>
  );
};

export default OrderPage;
