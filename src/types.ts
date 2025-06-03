import type { DrupalNode } from "next-drupal";

export interface CampingProps {
  data: DrupalNode;
}

export interface Campings {
  data: Camping[];
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
export interface Path {
  alias: null;
  pid: null;
  langcode: string;
}
export interface ArticleAttributes {
  drupal_internal__nid: number;
  drupal_internal__vid: number;
  langcode: string;
  revision_timestamp: Date;
  revision_log: null;
  status: boolean;
  title: string;
  created: Date;
  changed: Date;
  promote: boolean;
  sticky: boolean;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  path: Path;
  body: Body;
  comment: Comment;
}
export interface Body {
  value: string;
  format: string;
  processed: string;
  summary: string;
}
