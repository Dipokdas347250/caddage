"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Our_Product from "./Our_Product";
import Navberdata from "@/data/navber";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Drinks = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All products");
  const [limit, setLimit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://dummyjson.com/products`
      );

      console.log("API Response:", res.data);

      const allProducts = res.data.products || [];

      setProducts(allProducts);
      setLimit(allProducts.slice(0, 8));
    } catch (err) {
      console.error(err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Category Filter
  const handleActivecategory = (name) => {
    setCategory(name);

    if (name === "All products") {
      setLimit(products.slice(0, 8));
      return;
    }

    const filtered = products.filter(
      (item) =>
        item.category?.toLowerCase() === name.toLowerCase()
    );

    setLimit(filtered);
  };

  // See All
  const handleShowMore = () => {
    if (category === "All products") {
      setLimit(products);
    } else {
      const filtered = products.filter(
        (item) =>
          item.category?.toLowerCase() === category.toLowerCase()
      );
      setLimit(filtered);
    }
  };

  // See Less
  const handleShowLess = () => {
    if (category === "All products") {
      setLimit(products.slice(0, 8));
    } else {
      const filtered = products.filter(
        (item) =>
          item.category?.toLowerCase() === category.toLowerCase()
      );
      setLimit(filtered.slice(0, 8));
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading Products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div>
      {/* Category */}
      <div className="flex justify-between items-center mt-14">
        <MdKeyboardDoubleArrowLeft size={30} />

        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-[90%] border-y">
          {Navberdata?.categoyrList?.map((item) => (
            <button
              key={item.id}
              onClick={() => handleActivecategory(item.name)}
              className={`py-3 px-6 transition-all duration-300 ${
                category === item.name
                  ? "bg-secondary text-white"
                  : "bg-white text-black"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <MdKeyboardDoubleArrowRight size={30} />
      </div>

      {/* Products */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {limit.length > 0 ? (
          limit.map((item) => (
            <Our_Product
              key={item._id}
              product={item}
            />
          ))
        ) : (
          <h2 className="text-center col-span-4 text-xl font-semibold">
            No Products Found
          </h2>
        )}
      </div>

      {/* Button */}
      {limit.length > 0 && (
        <div className="text-center mt-10">
          {limit.length >= products.length ||
          (category !== "All products" &&
            limit.length ===
              products.filter(
                (item) =>
                  item.category?.toLowerCase() ===
                  category.toLowerCase()
              ).length) ? (
            <button
              onClick={handleShowLess}
              className="btn-primary"
            >
              See Less Product
            </button>
          ) : (
            <button
              onClick={handleShowMore}
              className="btn-primary"
            >
              See All Product
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Drinks;