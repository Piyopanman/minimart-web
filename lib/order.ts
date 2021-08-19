import { CartItem } from "../pages/products/[id]";
import { graphqlRequest } from "./graphqlClient";

export type OrderItem = {
  productId: string;
  quantity: number;
};

export type Order = {
  canceledAt: string;
  deliveryDate: string;
  id: string;
  items: CartItem[];
  orderedAt: string;
  pickupLocation: { name: string };
  totalAmount: number;
  user: { name: string };
};

const createOrderQuery = `
    mutation($items: [OrderItemInput!]!){
        createOrder(input: {items: $items}){
            order{
                id
            }
        }
    }
`;

const getOrderQuery = `
    query($id: ID!){
        order(id: $id){            
            deliveryDate
            orderedAt
            items{
                product{
                    name
                    price
                    imageUrl
                }
                quantity
            }
            pickupLocation{
                name
            }
            totalAmount           
        }
    }
`;

export async function createOrder(items: CartItem[]): Promise<String> {
  const orderItemInput: OrderItem[] = items.map((item) => ({ productId: item.product.id, quantity: item.quantity }));
  console.log(orderItemInput);
  const data = await graphqlRequest({ query: createOrderQuery, variables: { items: orderItemInput } });

  return data.createOrder.order.id;
}

export async function getOrder(id: string): Promise<Order> {
  const data = await graphqlRequest({ query: getOrderQuery, variables: { id: id } });
  return data.order;
}
