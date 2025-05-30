import type { Campings } from "./types";

export const getCampingsDrupalQuery = async (): Promise<Campings> => {
  try {
    const res = await fetch("https://be-buitenbijons-v2.ddev.site/jsonapi/node/campings");
    const data: Campings = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
