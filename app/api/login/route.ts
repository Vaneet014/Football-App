import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Find user in the database
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });

  // Compare passwords
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 400 });

  return new Response(JSON.stringify({ message: 'Login successful' }));
}
