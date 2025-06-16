import type { Owner } from "./typesOwners";
export interface Campings {
  data: Camping[];
}
export interface Camping {
  nid: Nid[];
  uuid: { value: string }[];
  vid: Nid[];
  langcode: FieldCampingCheckinout[];
  type: {
    target_id: string;
    target_type: string;
    target_uuid: string;
  };
  revision_timestamp: Changed[];
  revision_uid: FieldCampingCity[];
  revision_log: any[];
  status: DefaultLangcode[];
  uid: FieldCampingCity[];
  title: {
    value: string;
  }[];
  created: Changed[];
  changed: Changed[];
  promote: DefaultLangcode[];
  sticky: DefaultLangcode[];
  default_langcode: DefaultLangcode[];
  revision_translation_affected: DefaultLangcode[];
  path: Path[];
  field_camping_checkinout: FieldCampingCheckinout[];
  field_camping_city: FieldCampingCity[];
  field_camping_country: FieldCampingCity[];
  field_camping_description: FieldCamping[];
  field_camping_image: FieldCampingImage[];
  field_camping_location: {
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
  };
  field_camping_price: {
    value: string;
  };
  field_camping_rules: FieldCamping[];
  field_owner_id: Owner[];
}

export interface Changed {
  value: Date;
  format: string;
}

export interface DefaultLangcode {
  value: boolean;
}

export interface FieldCampingCheckinout {
  value: string;
}

export interface FieldCampingCity {
  target_id: number;
  target_type: string;
  target_uuid: string;
  url: string;
}

export interface FieldCamping {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

export interface FieldCampingImage {
  target_id: number;
  alt: string;
  title: string;
  width: number;
  height: number;
  target_type: string;
  target_uuid: string;
  url: string;
}

export interface Nid {
  value: number;
}

export interface Path {
  alias: null;
  pid: null;
  langcode: string;
}
