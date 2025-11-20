import React from "react";
import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Divine Currency</h1>
      </header>
      <main className="px-6 py-8">
        <section>
          <WalletConnect />
        </section>
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Welcome to the Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="/mint-dream"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Mint a Dream Coin
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              >
                View Your Portfolio
              </a>
            </li>
            <li>
              <a
                href="/trade"
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
              >
                Trade Dream Coins
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Divine Currency</p>
      </footer>
    </div>
  );
}