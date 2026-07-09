import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.json();
    const { genre } = data;
    const filePath = path.join(process.cwd(), "public", "data", "genres.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileData);
    const filteredData = jsonData.filter((item) => {
      return item.type === genre;
    });

    if (filteredData.length === 0) {
      return NextResponse.json(
        { error: "فیلم یا سریال با این ژانر یافت نشد" },
        { status: 404 },
      );
    }
    
    return NextResponse.json(filteredData[0].movies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
