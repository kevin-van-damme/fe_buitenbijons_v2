import { NextResponse } from "next/server";
import { getCampingsDrupalQuery } from "@/queries";

export async function GET() {
  try {
    const data = await getCampingsDrupalQuery();
    return NextResponse.json(
      data.data.map((camping) => ({
        id: camping.id,
        title: camping.attributes.title,
        description: camping.attributes.field_camping_description,
        location: camping.attributes.field_camping_location,
        price_per_night: camping.attributes.field_price_per_night,
        // image: camping.attributes.field_camping_image.links.href,
      }))
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
