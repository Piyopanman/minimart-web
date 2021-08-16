import type { CartItem } from "../pages/products/[id]";
import { NextPage } from "next";
import { useState } from "react";
import { updateCartItemNum } from "../utils/updateCartItemNum";
import { useRecoilState } from "recoil";
import { totalPriceState } from "../recoil/atoms/totalPrice";

type Props = {
  cartItem: CartItem;
};

const Item: NextPage<Props> = ({ cartItem }) => {
  const [itemCount, setItemCount] = useState(cartItem.quantity);
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);

  const incrementItem = () => {
    setItemCount(itemCount + 1);
    setTotalPrice(totalPrice + cartItem.product.price);
    updateCartItemNum(cartItem.product.id, 1);
  };

  const decrementItem = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
      setTotalPrice(totalPrice - cartItem.product.price);
    }
    updateCartItemNum(cartItem.product.id, 0);
  };

  return (
    <div key={cartItem.product.id}>
      <h1>{cartItem.product.name}</h1>
      <img src={cartItem.product.imageUrl} alt="item.product.id" />
      <p>{cartItem.product.price}円</p>
      <p>{itemCount}個</p>
      <button onClick={incrementItem}> + </button>
      <button onClick={decrementItem}> - </button>
    </div>
  );
};

export default Item;
