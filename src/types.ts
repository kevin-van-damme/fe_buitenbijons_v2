import type { DrupalNode } from "next-drupal";

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
    field_price_per_night: string;
    // field_camping_image: {
    //   links: {
    //     href: string;
    //   };
    // };
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
