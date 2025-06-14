import CampingPageLeaflet from "@/components/body/CampingPageLeaflet";
import CampingPagePagination from "@/components/body/CampingPagePagination";
import CampingPageSearchBar from "@/components/body/CampingPageSearchBar";
import FrontPageCards from "@/components/body/FrontPageCards";
import type { SearchParams } from "@/types";
import Map from "@/components/leafletmap/Map";
import type { Camping, Campings } from "@/typesCampings";

const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const res = await fetch("https://be-buitenbijons-test.ddev.site:33001/api/v1/campings", {
    next: {
      revalidate: 60,
    },
  });
  const data: Camping[] = await res.json();
  const filteredData = data
    .filter((camping) => {
      if (searchParams.name) {
        return camping.title.value.toLowerCase().indexOf(searchParams.name.toLowerCase()) != -1;
      }
      return true;
    })
    .filter((camping) => {
      if (searchParams.min && searchParams.max) {
        return (
          parseFloat(camping.field_camping_price.value) <= parseFloat(searchParams.max) &&
          parseFloat(camping.field_camping_price.value) >= parseFloat(searchParams.min)
        );
      }
      if (searchParams.min) {
        return parseFloat(camping.field_camping_price.value) >= parseFloat(searchParams.min);
      }
      if (searchParams.max) {
        return parseFloat(camping.field_camping_price.value) <= parseFloat(searchParams.max);
      }
      return true;
    });
  return (
    <div className="flex flex-col gap-10 mx-auto">
      <Map campings={filteredData} />
      <CampingPageSearchBar searchParams={searchParams} />
      <FrontPageCards campings={filteredData} />
      <CampingPagePagination />
    </div>
  );
};
export default page;
