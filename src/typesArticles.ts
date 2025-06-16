export interface Articles {
  data: Article[];
}

export interface Article {
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
  title: Langcode[];
  created: Changed[];
  changed: Changed[];
  promote: DefaultLangcode[];
  sticky: DefaultLangcode[];
  default_langcode: DefaultLangcode[];
  revision_translation_affected: DefaultLangcode[];
  path: Path[];
  body: Body[];
  comment: Comment[];
  field_image: FieldImage[];
  field_tags: any[];
}

export interface Body {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

export interface Changed {
  value: Date;
  format: string;
}

export interface Comment {
  status: number;
  cid: number;
  last_comment_timestamp: number;
  last_comment_name: null;
  last_comment_uid: number;
  comment_count: number;
}

export interface DefaultLangcode {
  value: boolean;
}

export interface FieldImage {
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
