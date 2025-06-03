import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { DrupalNode } from "next-drupal";
import { drupal } from "@/lib/drupal";
import type { ArticleNode } from "@/types";

const page = async () => {
  // const res = await fetch("https://be-buitenbijons-v2.ddev.site/jsonapi/node/article");
  // const data = await res.json();
  const params = new DrupalJsonApiParams()
    .addFields("node--article", ["title", "body", "field_image"])
    .addFilter("status", "1")
    .addSort("created", "DESC");

  console.log(params);

  const nodes = await drupal.getResourceCollection<ArticleNode[]>(
    "node--article",
    {
      include: ["field_image"],
      fields: {
        "node--article": ["title", "body", "field_image"],
      },
    },
    params
  );

  console.log(nodes);

  return (
    <div className="flex flex-col w-300 mx-auto my-10">
      {nodes && nodes.length > 0
        ? nodes.map((article) => (
            <div key={article.id}>
              {/* <div>
              <img src={article.attributes.field_image?.data.type} alt="" />
            </div> */}
              <h3>{article.title}</h3>
              <p>{article.body.value}</p>
            </div>
          ))
        : nodes && nodes.map((article) => <p>{article.body ? article.body.value : "No content available"}</p>)}
    </div>
  );
};
export default page;
