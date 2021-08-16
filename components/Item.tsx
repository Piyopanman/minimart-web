import type { CartItem } from "../pages/products/[id]";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { updateCartItemNum } from "../utils/updateCartItemNum";
import { useRecoilState } from "recoil";
import { totalPriceState } from "../recoil/atoms/totalPrice";

type Props = {
  cartItem: CartItem;
  onIncrement: (item: CartItem) => void;
  onDecrement: (item: CartItem) => void;
};

const Item: NextPage<Props> = ({ cartItem, onIncrement, onDecrement }) => {
  const [itemCount, setItemCount] = useState(cartItem.quantity);

  const incrementItem = () => {
    onIncrement(cartItem);
  };

  const decrementItem = () => {
    onDecrement(cartItem);
  };

  return (
    <div key={cartItem.product.id}>
      <h1>{cartItem.product.name}</h1>
      <img src={cartItem.product.imageUrl} alt="item.product.id" />
      <p>{cartItem.product.price}円</p>
      <p>{cartItem.quantity}個</p>
      <button onClick={incrementItem}> + </button>
      <button onClick={decrementItem}> - </button>
    </div>
  );
};

export default Item;
