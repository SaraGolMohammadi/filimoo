import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.json();
    const { genre, category, ageRating, country } = data;

    if (genre) {
      const filePath = path.join(
        process.cwd(),
        "public",
        "data",
        "genres.json",
      );
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const genresData = JSON.parse(fileContent);

      const foundGenre = genresData.find((item) => item.type === genre);

      if (!foundGenre || !foundGenre.movies || foundGenre.movies.length === 0) {
        return NextResponse.json(
          { error: "فیلم یا سریال با این ژانر یافت نشد" },
          { status: 404 },
        );
      }

      return NextResponse.json(foundGenre.movies, { status: 200 });
    }

    if (category || ageRating || country) {
      const filePath = path.join(
        process.cwd(),
        "public",
        "data",
        "category.json",
      );
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const categoryData = JSON.parse(fileContent);

      const filteredData = categoryData.filter((item) => {
        if (category) return item.category === category;
        if (ageRating) return item.ageRating === ageRating;
        if (country) return item.country === country;
        return false;
      });

      if (filteredData.length === 0) {
        return NextResponse.json(
          { error: "موردی با این مشخصات یافت نشد" },
          { status: 404 },
        );
      }

      return NextResponse.json(filteredData, { status: 200 });
    }

    return NextResponse.json(
      { error: "هیچ فیلتری ارسال نشده است" },
      { status: 400 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "genres.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const genresData = JSON.parse(fileContent);

    // const allGenres = genresData.map((item) => item.movies).flat();

    return NextResponse.json(genresData, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
