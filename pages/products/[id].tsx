import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProduct } from "../../lib/product";
import type { Product } from "../../lib/product";
import { Layout } from "../../components/Layout";

const DetailPage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProduct(String(router.query.id)).then((product) => setProduct(product));
  }, []);

  return (
    <Layout>
      <h1>{product?.name}</h1>
      <img src={product?.imageUrl} alt={product?.id} />
      <p>{product?.price}円</p>
      <h1>{product?.description}</h1>
      <button>カートに入れる</button>
    </Layout>
  );
};

export default DetailPage;
