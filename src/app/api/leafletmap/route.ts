import { NextResponse } from "next/server";
import { getLeafletBlock } from "@/queries";

export async function GET() {
  try {
    const data = await getLeafletBlock();
    console.log(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
