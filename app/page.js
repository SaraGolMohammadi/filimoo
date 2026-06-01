'use client';

import ProductSlider from "./Banner/page";
import Cart from "./movies/page";
import Footer from "./components/Footer";
import "./globals.css";
export default function Home() {
  return (
    <main className=" bg-gray-900">
      <ProductSlider />
        <Cart />
    </main>
  );
}