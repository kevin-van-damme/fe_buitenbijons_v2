import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { DrupalNode } from "next-drupal";
import { drupal } from "@/lib/drupal";
import type { ArticleNode } from "@/types";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/articles");
  const data = await res.json();
  console.log(data);

  // const params = new DrupalJsonApiParams()
  //   .addFields("node--article", ["title", "body", "field_image"])
  //   .addFilter("status", "1")
  //   .addSort("created", "DESC");

  // console.log(params);

  // const nodes = await drupal.getResourceCollection<ArticleNode[]>(
  //   "node--article",
  //   {
  //     include: ["field_image"],
  //     fields: {
  //       "node--article": ["title", "body", "field_image"],
  //     },
  //   },
  //   params
  // );

  // console.log(nodes);

  return (
    <div className="flex flex-col w-300 mx-auto my-10">
      {data && data.length > 0 ? (
        data.map((article: ArticleNode) => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: article.body.value }} />
          </div>
        ))
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default page;
