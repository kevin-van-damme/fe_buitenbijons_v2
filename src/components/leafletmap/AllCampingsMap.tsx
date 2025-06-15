"use client";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import type { Camping } from "@/typesCampings";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

const AllCampingsMap = ({ campings }: { campings: Camping[] }) => {
  return (
    <MapContainer className="w-full h-175" zoom={7} maxZoom={18} center={[50.68072319026102, 5.299799969579857]}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {campings.length > 0 ? (
        <MarkerClusterGroup>
          {campings
            .filter((camping) => camping?.field_camping_location?.lat !== undefined && camping?.field_camping_location?.lon !== undefined)
            .map((camping) => (
              <Marker key={camping.nid[0].value} position={[camping.field_camping_location.lat, camping.field_camping_location.lon]}>
                <Popup>
                  <Image src={camping.field_camping_image[0].url} width={200} height={200} alt={camping.field_camping_image[0].alt} />
                  <p>{camping.title.value}</p>
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
      ) : (
        <p>There seems to be a problem loading the campings...</p>
      )}
    </MapContainer>
  );
};
export default AllCampingsMap;
