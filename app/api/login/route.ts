
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Read users from the JSON file
  const filePath = path.join(process.cwd(), "data", "users.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(fileData);

  // Find user
  const user = users.find((u: any) => u.email === email && u.password === password);

  if (user) {
    return NextResponse.json({ message: "Login successful", user });
  } else {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }
}
