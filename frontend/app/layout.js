import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "ShopEase | Modern E-commerce Platform",
  description: "Shop products easily and manage real-time orders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
