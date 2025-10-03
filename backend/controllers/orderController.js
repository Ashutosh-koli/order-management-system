import Order from "../models/Order.js";

// Create order
export const createOrder = async (req, res) => {
  try {
    const { customerName, email, contactNumber, shippingAddress, productName, quantity } = req.body;
    const productImage = req.file ? req.file.filename : null;

    const order = await Order.create({
      customerName,
      email,
      contactNumber,
      shippingAddress,
      productName,
      quantity,
      productImage
    });

    // Emit real-time update
    req.io.emit("newOrder", order);

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all orders
export const getOrders = async (req, res) => {
  const { productName, startDate, endDate } = req.query;
  let filter = {};

  if (productName) filter.productName = { $regex: productName, $options: "i" };
  if (startDate && endDate) {
    filter.createdAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }

  const orders = await Order.find(filter).sort({ createdAt: -1 });
  res.json(orders);
};

// Get single order
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) res.json(order);
  else res.status(404).json({ message: "Order not found" });
};

// Update order quantity
export const updateOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.quantity = req.body.quantity || order.quantity;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.deleteOne();
    res.json({ message: "Order removed" });
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};
