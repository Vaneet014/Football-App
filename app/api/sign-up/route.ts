
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const filePath = path.join(process.cwd(), "data", "users.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(fileData);

  const existingUser = users.find((u: any) => u.email === email);

  if (existingUser) {
    return NextResponse.json({ error: "Email already in use" }, { status: 409 });
  }

  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: "Sign-up successful", user: newUser });
}
