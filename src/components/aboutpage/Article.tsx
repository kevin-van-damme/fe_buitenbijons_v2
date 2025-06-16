import { getArticleByIdDrupalQuery } from "@/queries";
import type { Article } from "@/typesArticles";

const Article = async () => {
  const data = await getArticleByIdDrupalQuery("bc5613f5-46fc-4c8a-b31c-b15dc50c45ce");

  return (
    <>
      {data ? (
        <div key={data.uuid[0].value}>
          <h3>{data.title[0].value}</h3>
          {/* Render HTML content safely */}
          <div dangerouslySetInnerHTML={{ __html: data.body[0].value }} />
        </div>
      ) : (
        <p>No content available</p>
      )}
    </>
  );
};
export default Article;
