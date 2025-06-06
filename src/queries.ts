import type { Campings } from "./types";
import type { ArticleNode } from "./types";

export const getCampingsDrupalQuery = async (): Promise<Campings> => {
  try {
    const res = await fetch("https://be-buitenbijons-v2.ddev.site:33003/jsonapi/node/campings");
    const data: Campings = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getArticleDrupalQuery = async (): Promise<ArticleNode> => {
  try {
    const res = await fetch("https://be-buitenbijons-v2.ddev.site:33003/jsonapi/node/article");
    const data: ArticleNode = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
