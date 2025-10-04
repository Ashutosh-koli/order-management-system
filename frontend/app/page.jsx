export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-32 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <header className="w-full flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-extrabold text-blue-700">Online Shop</h1>
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#orders" className="hover:text-blue-600 transition">Orders</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </nav>
      </header>
      
      <section className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center px-10 pt-10 md:pt-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 drop-shadow-sm">
            The Future of <span className="text-blue-600">Shopping</span> Starts Here 🛒
          </h1>

          <p className="text-gray-600 mt-6 mb-10 text-lg md:text-xl max-w-lg leading-relaxed">
            Online Shop is your <span className="font-semibold text-blue-600">all-in-one solution</span> 
            for browsing products, placing orders, and managing purchases effortlessly.
          </p>

          <div className="flex gap-6">
            <a
              href="/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              🚀 Get Started
            </a>
            <a
              href="/login"
              className="border-2 border-blue-600 px-8 py-4 rounded-xl text-blue-700 bg-white shadow-md hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-semibold"
            >
              🔑 Login
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
 