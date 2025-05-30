export interface Campings {
  data: Camping[];
}
export interface Camping {
  id: string;
  attributes: {
    title: string;
    field_camping_description: string;
    field_camping_location: FieldCampingLocation;
    field_price_per_night: string;
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
