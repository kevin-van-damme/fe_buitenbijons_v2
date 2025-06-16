import type { User } from "./types";
import axios from "axios";
import { Article, Articles } from "./typesArticles";
import type { Campings, Camping } from "./typesCampings";
import type { Owner, Owners } from "./typesOwners";

// GET
export const getCampingsDrupalQuery = async (): Promise<Campings> => {
  try {
    const res = await fetch("https://be-buitenbijons-test.ddev.site:33003/api/v1/campings", {
      next: {
        revalidate: 60,
      },
    });
    const data: Campings = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getCampingByIdDrupalQuery = async (id: string): Promise<Camping> => {
  try {
    const res = await fetch(`https://be-buitenbijons-test.ddev.site:33003/api/v1/campings/${id}`);
    const data: Camping = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getArticleDrupalQuery = async (): Promise<Articles> => {
  try {
    const res = await fetch("https://be-buitenbijons-test.ddev.site:33003/api/v1/articles", {
      next: {
        revalidate: 60,
      },
    });
    const data: Articles = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getArticleByIdDrupalQuery = async (id: string): Promise<Article> => {
  try {
    const res = await fetch(`https://be-buitenbijons-test.ddev.site:33003/api/v1/articles/${id}`, {
      next: {
        revalidate: 60,
      },
    });
    const data: Article[] = await res.json();
    return data[0];
  } catch (error) {
    throw error;
  }
};
export const getOwnersDrupalQuery = async (): Promise<Owners> => {
  try {
    const res = await fetch("https://be-buitenbijons-test.ddev.site:33003/api/v1/owners", {
      next: {
        revalidate: 60,
      },
    });
    const data: Owners = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getOwnerByIdDrupalQuery = async (id: string): Promise<Owner> => {
  try {
    const res = await fetch(`https://be-buitenbijons-test.ddev.site:33003/api/v1/owners/${id}`, {
      next: {
        revalidate: 60,
      },
    });
    const data: Owner[] = await res.json();
    return data[0];
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

// POST
export const createUserDrupalQuery = async (user: User) => {
  try {
    const res = await axios.post("https://be-buitenbijons-v2.ddev.site:33003/jsonapi/user/user", user);
    console.log(res);
  } catch (error) {
    throw error;
  }
};
