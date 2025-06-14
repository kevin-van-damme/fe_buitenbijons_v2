"use client";
import dynamic from "next/dynamic";
import { Camping } from "@/typesCampings";

const AllCampingsMap = dynamic(() => import("../../components/leafletmap/AllCampingsMap"), {
  ssr: false,
});

const Map = ({ campings }: { campings: Camping[] }) => {
  return <AllCampingsMap campings={campings} />;
};
export default Map;
