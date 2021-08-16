import type { CartItem } from "../pages/products/[id]";
import { NextPage } from "next";

type Props = {
  cartItem: CartItem;
};

const Item: NextPage<Props> = ({ cartItem }) => {
  return (
    <div key={cartItem.product.id}>
      <h1>{cartItem.product.name}</h1>
      <img src={cartItem.product.imageUrl} alt="item.product.id" />
      <p>{cartItem.product.price}円</p>
      <p>{cartItem.quantity}個</p>
    </div>
  );
};

export default Item;
