import { NextResponse } from "next/server";
import { getArticleDrupalQuery } from "@/queries";
import { ArticleNode } from "@/types";

export async function GET() {
  const data: ArticleNode = await getArticleDrupalQuery();
  return NextResponse.json(
    data.data.map((article: ArticleNode) => ({
      id: article.id,
      body: article.attributes.body,
      image: article.attributes.field_image,
    }))
  );

  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
