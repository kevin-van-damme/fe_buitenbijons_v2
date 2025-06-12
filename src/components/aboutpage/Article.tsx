import type { ArticleNode, CampingData } from "@/types";

const Article = async () => {
  const res = await fetch("https://be-buitenbijons-v2.ddev.site:33001/jsonapi/node/article", {
    next: {
      revalidate: 60,
    },
  });
  const data: CampingData = await res.json();

  return (
    <>
      {data && data.data.length > 0 ? (
        data.data.map((article: ArticleNode) => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: article.attributes.body.value }} />
          </div>
        ))
      ) : (
        <p>No content available</p>
      )}
    </>
  );
};
export default Article;
