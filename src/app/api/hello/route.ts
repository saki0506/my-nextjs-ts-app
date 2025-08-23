// src/app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface Data {
  message: string;
}

export async function GET(request: NextRequest) {
  const data: Data = {
    message: 'Hello World'
  };

  return NextResponse.json(data);
}