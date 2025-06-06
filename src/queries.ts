import type { Campings } from "./types";
import type { ArticleNode } from "./types";
import axios from "axios";

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
export const getLeafletBlock = async () => {
  try {
    const res = await axios.get("https://be-buitenbijons-v2.ddev.site:33003/jsonapi/view/view/0b9c96be-0623-4b4d-a263-71919a99a5dd");
    console.log(res);
  } catch (error) {
    throw error;
  }
};
