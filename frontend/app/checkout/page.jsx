"use client";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function CheckoutPage() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    contactNumber: "",
    shippingAddress: "",
  });

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (!form.customerName || !form.email || !form.contactNumber || !form.shippingAddress) {
      toast.error("Please fill all customer details!");
      return;
    }

    const orderData = {
      customerName: form.customerName,
      email: form.email,
      contactNumber: form.contactNumber,
      shippingAddress: form.shippingAddress,
      items: items.map((item) => ({
        productName: item.title || item.name,
        quantity: item.quantity,
        productImage: item.image,
        price: item.price,
      })),
      totalAmount: total,
    };

    try {
 
      await axios.post("http://localhost:5000/api/orders", orderData);

      toast.success("Order placed successfully!");
      dispatch(clearCart());
      setTimeout(() => router.push("/products"), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        🧾 Checkout Summary
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Customer Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <input
              type="text"
              name="customerName"
              placeholder="Full Name"
              value={form.customerName}
              onChange={handleChange}
              className="border p-3 rounded-md focus:outline-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="border p-3 rounded-md focus:outline-blue-500"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={form.contactNumber}
              onChange={handleChange}
              className="border p-3 rounded-md focus:outline-blue-500"
            />
            <input
              type="text"
              name="shippingAddress"
              placeholder="Shipping Address"
              value={form.shippingAddress}
              onChange={handleChange}
              className="border p-3 rounded-md focus:outline-blue-500 col-span-1 sm:col-span-2"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Order Summary
          </h2>
          <div className="divide-y">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                  <div>
                    <p className="font-medium text-gray-700">
                      {item.title.substring(0, 40)}...
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-right mt-6">
            Total: ₹{total.toFixed(2)}
          </h2>

          <div className="text-center mt-8">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition"
            >
              Confirm & Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
