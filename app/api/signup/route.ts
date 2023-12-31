import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://localhost:1337/api/v1/entrance/signup";
const API_KEY = process.env.API_KEY as string;

export async function POST(request: Request) {
  const { fullName, emailAddress, password }: Partial<Signup> = await request.json();

  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
    body: JSON.stringify({
      fullName,
      emailAddress,
      password,
    }),
  });

  const newSignup: Signup = await res.json()
  return NextResponse.json(newSignup);
}
