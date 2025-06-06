import { cardData } from "@/data/card-data"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(cardData)
}

