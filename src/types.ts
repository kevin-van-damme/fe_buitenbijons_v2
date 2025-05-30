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
