import { updateMinutes } from "@/components/dbQuery";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
    try {
    const data = await request.json()
    const updatedMinutes = await updateMinutes(data.id, data.newMinutes)
    return NextResponse.json({
      updatedMinutes,
    })
  } catch {
    console.log("update failed")
  }
  }