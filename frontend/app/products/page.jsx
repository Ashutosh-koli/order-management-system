"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (err) {
        toast.error("Failed to load products");
      }
    };
    fetchProducts();
  }, []);

  const getItemQty = (id) => {
    const item = items.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        🛍️ Explore Our Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => {
          const qty = getItemQty(product.id);
          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 p-4 flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 w-32 object-contain mb-3"
              />
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-blue-600 font-bold text-lg mb-2">
                ₹{product.price}
              </p>

              {qty === 0 ? (
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                    toast.success("Added to Cart");
                  }}
                  className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQty(product.id))}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="text-base font-semibold">{qty}</span>
                  <button
                    onClick={() => dispatch(increaseQty(product.id))}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Link href="/checkout">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            🧾 Go to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
