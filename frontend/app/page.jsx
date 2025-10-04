export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white text-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-6">Welcome to ShopEase 🛒</h1>
      <p className="text-gray-700 mb-8 text-lg">Your one-stop solution for online shopping.</p>
      <div className="flex gap-4">
        <a href="/register" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">Get Started</a>
        <a href="/login" className="border border-blue-600 px-5 py-3 rounded-lg text-blue-600 hover:bg-blue-50">Login</a>
      </div>
    </main>
  );
}
