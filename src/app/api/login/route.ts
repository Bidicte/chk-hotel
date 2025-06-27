// app/api/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Données fictives
  const mockUser = {
    email: "demo@chk.com",
    password: "123456",
    token: "mocked_token_abc123",
  };

  // Validation simple
  if (email === mockUser.email && password === mockUser.password) {
    return NextResponse.json({
      token: mockUser.token,
      user: {
        name: "CHK Admin",
        email: mockUser.email,
      },
    });
  } else {
    return new NextResponse(
      JSON.stringify({ message: "Identifiants incorrects." }),
      { status: 401 }
    );
  }
}
