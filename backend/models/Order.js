import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    contactNumber: { type: String, required: true, match: /^\d{10}$/ },
    shippingAddress: { type: String, required: true, maxlength: 100 },
    productName: { type: String, required: true, minlength: 3, maxlength: 50 },
    quantity: { type: Number, required: true, min: 1, max: 100 },
    productImage: { type: String } // filename of uploaded image
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
