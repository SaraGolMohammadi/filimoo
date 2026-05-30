"use client";

import React, { useMemo, useState, useEffect } from "react";
import HomePage from "../HomePage/page";

export default function Filter() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const [tempType, setTempType] = useState("");
  const [tempGenre, setTempGenre] = useState("");
  const [tempCountry, setTempCountry] = useState("");
  const [tempLanguage, setTempLanguage] = useState("");
  const [tempAge, setTempAge] = useState("");
  const [tempSort, setTempSort] = useState("latest");

  const [selectedType, setSelectedType] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [appliedSort, setAppliedSort] = useState("latest");

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        const moviesData = data.movies || data;
        setProducts(moviesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("خطا در دریافت دیتا:", error);
        setLoading(false);
      });
  }, []);


  const uniqueGenres = useMemo(() => {
    const genres = products.map(p => p.genre).filter(Boolean);
    return [...new Set(genres)];
  }, [products]);

  const uniqueCountries = useMemo(() => {
    const countries = products.map(p => p.country).filter(Boolean);
    return [...new Set(countries)];
  }, [products]);

  const uniqueLanguages = useMemo(() => {
    const languages = products.map(p => p.filmLanguage).filter(Boolean);
    return [...new Set(languages)];
  }, [products]);

  const uniqueAges = useMemo(() => {
    const ages = products.map(p => p.ageRating).filter(Boolean);
    return [...new Set(ages)];
  }, [products]);

  const uniqueTypes = useMemo(() => {
    const types = products.map(p => p.movieType).filter(Boolean);
    return [...new Set(types)];
  }, [products]);

 
  const filteredAndSortedProducts = useMemo(() => {
    let arr = [...products];

  
    if (selectedGenre) {
      arr = arr.filter(item => item.genre === selectedGenre);
    }
    if (selectedCountry) {
      arr = arr.filter(item => item.country === selectedCountry);
    }
    if (selectedLanguage) {
      arr = arr.filter(item => item.filmLanguage === selectedLanguage);
    }
    if (selectedAge) {
      arr = arr.filter(item => item.ageRating === selectedAge);
    }
    if (selectedType) {
      arr = arr.filter(item => item.movieType === selectedType);
    }

    
    if (appliedSort === "latest") {
      arr.sort((a, b) => (b.productionYear ?? 0) - (a.productionYear ?? 0));
    } else if (appliedSort === "oldest") {
      arr.sort((a, b) => (a.productionYear ?? 0) - (b.productionYear ?? 0));
    } else if (appliedSort === "name_asc") {
      arr.sort((a, b) => (a.title || "").localeCompare(b.title || "", "fa"));
    } else if (appliedSort === "name_desc") {
      arr.sort((a, b) => (b.title || "").localeCompare(a.title || "", "fa"));
    }
    
    return arr;
  }, [products, appliedSort, selectedGenre, selectedCountry, selectedLanguage, selectedAge, selectedType]);

  const applyFilters = () => {
    setSelectedType(tempType);
    setSelectedGenre(tempGenre);
    setSelectedCountry(tempCountry);
    setSelectedLanguage(tempLanguage);
    setSelectedAge(tempAge);
    setAppliedSort(tempSort);
   
    setTimeout(() => {
      const resultsDiv = document.getElementById('results');
      if (resultsDiv) {
        resultsDiv.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }, 150);
  };

  const clearAllFilters = () => {
    setTempType("");
    setTempGenre("");
    setTempCountry("");
    setTempLanguage("");
    setTempAge("");
    setTempSort("latest");
    setSelectedType("");
    setSelectedGenre("");
    setSelectedCountry("");
    setSelectedLanguage("");
    setSelectedAge("");
    setAppliedSort("latest");
  };

  const hasActiveFilters = selectedType || selectedGenre || selectedCountry || selectedLanguage || selectedAge;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="w-full">

      <div className="z-20 backdrop-blur-md border-b w-full shadow-lg">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-purple-400">فیلترها</h2>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-red-400 hover:text-red-300 transition"
              >
                حذف همه ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 items-end">
            {uniqueTypes.length > 0 && (
              <div className="min-w-[85px]">
                <label className="block text-xs text-gray-400 mb-0.5">🎬 نوع</label>
                <select
                  value={tempType}
                  onChange={(e) => setTempType(e.target.value)}
                  className="w-full px-2 py-1.5 bg-gray-800 rounded-lg text-white border border-gray-700 text-sm"
                >
                  <option value="">همه</option>
                  {uniqueTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            )}

            {uniqueGenres.length > 0 && (
              <div className="min-w-[85px]">
                <label className="block text-xs text-gray-400 mb-0.5">🎭 ژانر</label>
                <select
                  value={tempGenre}
                  onChange={(e) => setTempGenre(e.target.value)}
                  className="w-full px-2 py-1.5 bg-gray-800 rounded-lg text-white border border-gray-700 text-sm"
                >
                  <option value="">همه</option>
                  {uniqueGenres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                </select>
              </div>
            )}

            {uniqueCountries.length > 0 && (
              <div className="min-w-[85px]">
                <label className="block text-xs text-gray-400 mb-0.5">🌍 کشور</label>
                <select
                  value={tempCountry}
                  onChange={(e) => setTempCountry(e.target.value)}
                  className="w-full px-2 py-1.5 bg-gray-800 rounded-lg text-white border border-gray-700 text-sm"
                >
                  <option value="">همه</option>
                  {uniqueCountries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
            )}

            {uniqueLanguages.length > 0 && (
              <div className="min-w-[85px]">
                <label className="block text-xs text-gray-400 mb-0.5">🌐 زبان</label>
                <select
                  value={tempLanguage}
                  onChange={(e) => setTempLanguage(e.target.value)}
                  className="w-full px-2 py-1.5 bg-gray-800 rounded-lg text-white border border-gray-700 text-sm"
                >
                  <option value="">همه</option>
                  {uniqueLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                </select>
              </div>
            )}

            {uniqueAges.length > 0 && (
              <div className="min-w-[85px]">
                <label className="block text-xs text-gray-400 mb-0.5">⚠️ سنی</label>
                <select
                  value={tempAge}
                  onChange={(e) => setTempAge(e.target.value)}
                  className="w-full px-2 py-1.5 bg-gray-800 rounded-lg text-white border border-gray-700 text-sm"
                >
                  <option value="">همه</option>
                  {uniqueAges.map(age => <option key={age} value={age}>{age}</option>)}
                </select>
              </div>
            )}

            <div className="min-w-[95px]">
              <label className="block text-xs text-gray-400 mb-0.5">🔄 مرتب‌سازی</label>
              <select
                value={tempSort}
                onChange={(e) => setTempSort(e.target.value)}
                className="w-full px-2 py-1.5 bg-gray-800 rounded-lg text-white border border-gray-700 text-sm"
              >
                <option value="latest">جدیدترین</option>
                <option value="oldest">قدیمی‌ترین</option>
                <option value="name_asc">الفبا (صعودی)</option>
                <option value="name_desc">الفبا (نزولی)</option>
              </select>
            </div>

            <div>
              <button 
                onClick={applyFilters}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-1.5 rounded-lg text-white font-bold transition shadow-lg mt-4 text-sm"
              >
                🔍 اعمال
              </button>
            </div>
          </div>
        </div>
      </div>

  
      <div id="results" className="w-full mt-4">
        <HomePage movies={filteredAndSortedProducts} />
      </div>
     
    </div>
  );
}
