"use client";

import Link from "next/link";
import Image from "next/image";

const Our_Product = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-xl p-4 cursor-pointer hover:shadow-xl duration-300">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h2 className="text-xl font-semibold mt-4">
          {product.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {product.category}
        </p>

        <h3 className="text-2xl font-bold mt-3">
          ${product.price}
        </h3>
      </div>
    </Link>
  );
};

export default Our_Product;