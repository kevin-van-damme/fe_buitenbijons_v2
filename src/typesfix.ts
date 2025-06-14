export interface Camping {
  nid: Nid[];
  uuid: Langcode[];
  vid: Nid[];
  langcode: Langcode[];
  type: Type[];
  revision_timestamp: Changed[];
  revision_uid: Uid[];
  revision_log: any[];
  status: DefaultLangcode[];
  uid: Uid[];
  title: {
    values: string;
  };
  created: Changed[];
  changed: Changed[];
  promote: DefaultLangcode[];
  sticky: DefaultLangcode[];
  default_langcode: DefaultLangcode[];
  revision_translation_affected: DefaultLangcode[];
  path: Path[];
  field_camping_image: FieldCampingImage[];
}

export interface Changed {
  value: Date;
  format: string;
}

export interface DefaultLangcode {
  value: boolean;
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

export interface Langcode {
  value: string;
}

export interface Nid {
  value: number;
}

export interface Path {
  alias: null;
  pid: null;
  langcode: string;
}

export interface Uid {
  target_id: number;
  target_type: string;
  target_uuid: string;
  url: string;
}

export interface Type {
  target_id: string;
  target_type: string;
  target_uuid: string;
}
