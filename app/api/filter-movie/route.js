import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.json();

    const { genre } = data;
    const filePath = path.join(process.cwd(), "public", "data", "filiter.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileData);
    const filteredData = jsonData.filter((item) => {
      return item.genre === genre;
    });
    return NextResponse.json(filteredData);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
