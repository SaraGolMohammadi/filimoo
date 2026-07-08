import { useState, useEffect } from "react";
import MovieSlider from "../components/MovieSlider";
import Footer from "../components/Footer";

export default function HomePage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/genres.json")
      .then((res) => res.json())
      .then((data) => {
        setSections(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت دیتا:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">در حال بارگذاری...</div>;

  return (
    <main className="min-h-screen text-white">
      {sections.map((section) => (
        <div key={section.id} className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-bold">{section.title}</p>
            <a href={`/category/${section.type}`} className="text-amber-400 text-sm hover:text-gray-300">
              مشاهده همه
            </a>
          </div>
          <MovieSlider products={section.movies} height="40vh" width="100%" />
        </div>
      ))}
      <Footer />
    </main>
  );
}
