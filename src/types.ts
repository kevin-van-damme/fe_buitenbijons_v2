import type { DrupalNode } from "next-drupal";
import { Url } from "next/dist/shared/lib/router/router";

export interface CampingProps {
  data: DrupalNode;
}

export interface Campings {
  data: Camping[];
}
export interface CampingData {
  data: Camping;
}
export interface Camping extends DrupalNode {
  id: string;
  attributes: {
    title: string;
    field_camping_description: string;
    field_camping_location: FieldCampingLocation;
    field_camping_price: string;
  };
  relationships: {
    field_owner_id: {
      links: {
        related: {
          href: {
            data: {
              attributes: {
                title: string;
                field_owner_mail: string;
                field_owner_phone: string;
              };
            };
          };
        };
      };
    };
    field_camping_image: {
      links: {
        related: {
          href: {
            data: {
              attributes: {
                uri: {
                  url: string;
                  value: string;
                };
              };
            };
          };
        };
      };
    };
    field_image: {
      links: {
        related: {
          href: {
            data: {
              attributes: {
                uri: {
                  url: string;
                  value: string;
                };
              };
            };
          };
        };
      };
    };
  };
}
export interface FieldCampingLocation {
  value: string;
  geo_type: string;
  lat: number;
  lon: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
  geohash: string;
  latlon: string;
}
export interface ArticleNode extends DrupalNode {
  attributes: {
    title: string;
    body: {
      value: string;
      format: string;
      processed: string;
      summary: string;
    };
    field_image?: {
      data: {
        type: string;
        id: string;
        meta: {
          alt: string;
          title: string;
          width: number;
          height: number;
          drupal_internal__target_id: number;
        };
      };
      links: {
        related: { href: string };
        self: { href: string };
      };
    };
  };
}
export interface LeafletNode extends DrupalNode {}

export interface Message {
  type: string;
  message: string;
  status: number;
}

export interface User {
  jsonapi: Jsonapi;
  data: Datum[];
  links: Links;
}

export interface Datum {
  type: string;
  id: string;
  links: Links;
  attributes: Attributes;
}

export interface Attributes {
  display_name: string;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}
export interface Jsonapi {
  version: string;
  meta: Meta;
}
export interface Meta {
  links: Links;
}
export interface PageParams {
  id: string;
}
export interface SearchParams {
  name: string | undefined;
  min: string | undefined;
  max: string | undefined;
}
