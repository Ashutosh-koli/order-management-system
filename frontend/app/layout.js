"use client";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
          <ToastContainer position="top-right" autoClose={2000} />
        </Provider>
      </body>
    </html>
  );
}
