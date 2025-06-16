export interface Owners {
  data: Owner[];
}

export interface Owner {
  nid: Nid[];
  uuid: FieldOwnerEmail[];
  vid: Nid[];
  langcode: FieldOwnerEmail[];
  type: Type[];
  revision_timestamp: Changed[];
  revision_uid: Uid[];
  revision_log: any[];
  status: DefaultLangcode[];
  uid: Uid[];
  title: FieldOwnerEmail[];
  created: Changed[];
  changed: Changed[];
  promote: DefaultLangcode[];
  sticky: DefaultLangcode[];
  default_langcode: DefaultLangcode[];
  revision_translation_affected: DefaultLangcode[];
  path: Path[];
  field_owner_email: FieldOwnerEmail[];
  field_owner_phone: FieldOwnerEmail[];
  field_owner_profile_picture: any[];
}

export interface Changed {
  value: Date;
  format: string;
}

export interface DefaultLangcode {
  value: boolean;
}

export interface FieldOwnerEmail {
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
