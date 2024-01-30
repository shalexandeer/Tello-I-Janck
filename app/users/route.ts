import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    hello: "world"
  }) // 200 OK
}