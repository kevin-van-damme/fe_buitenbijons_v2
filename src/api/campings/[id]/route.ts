import { NextResponse, NextRequest } from "next/server";
import { getCampingByIdDrupalQuery } from "@/queries";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await getCampingByIdDrupalQuery(id);
    return NextResponse.json(data.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function GET(request: Request) {
//   const { slug } = await params; // 'a', 'b', or 'c'
// }
