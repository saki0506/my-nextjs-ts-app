// src/app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface Data {
  message: string;
}

export async function GET(request: NextRequest) {
  const data: Data = {
    message: 'Hello, Next.js with TypeScript!'
  };

  return NextResponse.json(data);
}