# 📦 Order Management System

A full-stack web application to simulate a **Product Order Management System** where customers can place orders and admins can manage them via a protected dashboard.

---

## 🚀 Features

### 🛒 Customer
- Place product orders via a public form.
- Form fields with validation:
  - Customer Name (3–30 characters)
  - Email (valid format)
  - Contact Number (10 digits)
  - Shipping Address (max 100 characters)
  - Product Name (3–50 characters)
  - Quantity (1–100)
  - Product Image Upload (.jpg/.png, max 2MB)
- Display success message on successful order submission.

### 🔐 Admin Panel
- Secure **JWT-based login authentication**.
- Dashboard with:
  - View all orders in a table.
  - Filter orders by date or product name.
  - Edit quantity for an order.
  - Delete orders.
  - Real-time updates on new orders.
- Protected routes (middleware-based access control).

### ⚙️ Backend
- RESTful API endpoints for order management.
- File/image uploads with validation.
- Centralized error handling.
- Organized using **MVC architecture**.

### 🎨 Frontend
- Built with **Next.js (App Router, v14)**.
- **Tailwind CSS** for styling.
- **Redux Toolkit** for global state management.
- **Admin dashboard** under `/admin` route with protected access.
- Real-time updates via WebSockets.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS**
- **Redux Toolkit**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Token)** for authentication
- **Multer** for image uploads
- **Socket.io** (or Server-Sent Events) for real-time updates

---

## 📂 Folder Structure

```
order-management-system/
│
├── backend/
│   ├── config/          # DB & JWT config
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middlewares/     # Auth, error handling
│   ├── uploads/         # Product images
│   ├── server.js        # Entry point
│
├── frontend/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable components
│   ├── redux/           # Redux Toolkit slices/store
│   ├── styles/          # Tailwind styles
│   ├── package.json     
│
├── README.md
└── package.json
```

---

## ⚡ API Endpoints

### Orders
- `POST /api/orders` → Create new order
- `GET /api/orders` → Get all orders
- `GET /api/orders/:id` → Get specific order
- `PUT /api/orders/:id` → Update product quantity
- `DELETE /api/orders/:id` → Delete an order

### Admin
- `POST /api/admin/login` → Admin login

---

## 🔑 Setup Instructions

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/order-management-system.git
cd order-management-system
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/order-management
JWT_SECRET=your_jwt_secret_key
```

Run backend:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4️⃣ Access App
- Customer Order Page → `http://localhost:3000`
- Admin Dashboard → `http://localhost:5000/admin`

---

## 🔮 Future Enhancements
- Pagination & Sorting in admin panel.
- Role-based access (multiple admins).
- Email notifications for new orders.
- Cloud storage for images (AWS S3).
