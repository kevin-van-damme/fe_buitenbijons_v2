import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { DrupalNode } from "next-drupal";
import { drupal } from "@/lib/drupal";

const page = async () => {
  const res = await fetch("https://be-buitenbijons-v2.ddev.site/jsonapi/node/article");
  const data = await res.json();
  const params = new DrupalJsonApiParams()
    .addFields("node--article", ["title", "body", "field_image"])
    .addFilter("status", "1")
    .addSort("created", "DESC");
  console.log(params);

  const nodes = await drupal.getResourceCollection<DrupalNode[]>("node--article", {
    params: {
      include: "field_image",
    },
  });

  return (
    <>
      {nodes && nodes.length > 0 ? (
        nodes.map((article) => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))
      ) : (
        <p>There seems to be a problem with loading the article</p>
      )}
    </>
  );
};
export default page;
