import { NextResponse } from "next/server";
// import { getArticleDrupalQuery } from "@/queries";
// import { ArticleNode } from "@/types";

export async function GET() {
  // try {
  // const data: ArticleNode = await getArticleDrupalQuery();
  // console.log(data);
  // return NextResponse.json(
  //   data.data.map((article: ArticleNode) => ({
  //     id: article.id,
  //     body: article.attributes.body,
  //     image: article.attributes.field_image,
  //   }))
  // );

  return NextResponse.json({ message: "Hello World" });
  // } catch (error: any) {
  //   return NextResponse.json({ error: error.message }, { status: 500 });
  // }
}
