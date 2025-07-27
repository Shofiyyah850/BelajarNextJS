'use client';
import { useEffect, useState } from "react";
import CustomOrder from "./CustomOrder";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  content: string;
  authorId: string;
};

export default function Custom() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products_data");
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <CustomOrder />
      {products.map(product => (
        <div key={product.id} className="border flex justify-between">
          <div>
            <h3>{product.title}</h3>
            <div>{product.content}</div>
          </div>
          <div>
            <Link href={`/EditProduct/${product.id}`}>Edit</Link>
            <RemoveBtn productId={product.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
