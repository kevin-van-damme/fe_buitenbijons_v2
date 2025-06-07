import CampingPageLeaflet from "@/components/body/CampingPageLeaflet";
import CampingPagePagination from "@/components/body/CampingPagePagination";
import CampingPageSearchBar from "@/components/body/CampingPageSearchBar";
import FrontPageCards from "@/components/body/FrontPageCards";
const page = () => {
  return (
    <div className="flex flex-col gap-10 mx-auto">
      <CampingPageLeaflet />
      <CampingPageSearchBar />
      <div className="grid grid-cols-3 gap-10 mx-auto max-w-6xl mb-10">
        <FrontPageCards />
      </div>
      <CampingPagePagination />
    </div>
  );
};
export default page;
