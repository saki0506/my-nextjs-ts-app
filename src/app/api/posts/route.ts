// app/api/posts/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body); // リクエストから受け取ったデータを処理
  return NextResponse.json({ status: 'Success', data: body });
}