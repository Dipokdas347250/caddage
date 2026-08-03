import Image from "next/image";
import { Star } from "lucide-react";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="text-center py-20">Product Not Found</div>;
  }

  const product = await res.json();

  return (
    <section className="container mx-auto px-5 py-16">
      <div className="grid lg:grid-cols-2 gap-16">

        {/* Left Side */}
        <div>
          <div className="relative w-full h-[550px] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
              fill
              priority
              sizes="(max-width:768px)100vw,(max-width:1200px)50vw,40vw"
              className="object-contain p-8 hover:scale-105 duration-500"
            />
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-4 gap-4 mt-5">
            {product.images?.map((img, index) => (
              <div
                key={index}
                className="relative h-24 rounded-xl overflow-hidden border bg-gray-50"
              >
                <Image
                  src={img}
                  alt={product.title}
                  fill
                  sizes="100px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>

          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
            {product.brand}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {product.title}
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="ml-2 font-medium">
                {product.rating}
              </span>
            </div>

            <span className="text-gray-400">
              |
            </span>

            <span className="text-green-600 font-semibold">
              {product.stock} In Stock
            </span>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <h2 className="text-4xl font-bold text-red-500">
              ${product.price}
            </h2>

            <span className="line-through text-gray-400 text-xl">
              $
              {Math.round(
                product.price +
                  (product.price * product.discountPercentage) / 100
              )}
            </span>

            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-gray-600 leading-8 mt-8">
            {product.description}
          </p>

          <div className="mt-8 space-y-3">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>

            <p>
              <span className="font-semibold">SKU:</span>{" "}
              {product.sku || "N/A"}
            </p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-10">
            <span className="font-semibold">
              Quantity
            </span>

            <div className="flex border rounded-lg overflow-hidden">
              <button className="px-4 py-2 border-r hover:bg-gray-100">
                -
              </button>

              <span className="px-6 py-2">
                1
              </span>

              <button className="px-4 py-2 border-l hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            <button className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 duration-300">
              Add To Cart
            </button>

            <button className="px-8 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600 duration-300">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;