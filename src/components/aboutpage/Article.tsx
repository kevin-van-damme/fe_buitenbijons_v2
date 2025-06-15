import { getArticleDrupalQuery } from "@/queries";
import type { Article } from "@/typesArticles";

const Article = async () => {
  const data = await getArticleDrupalQuery();

  return (
    <>
      {data && data.length > 0 ? (
        data.map((article: Article) => (
          <div key={article.nid[0].value}>
            <h3>{article.title[0].value}</h3>
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: article.body[0].value }} />
          </div>
        ))
      ) : (
        <p>No content available</p>
      )}
    </>
  );
};
export default Article;
