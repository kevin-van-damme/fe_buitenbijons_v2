import { SearchParams } from "@/types";
import MultiRangeSlider from "../allcampingsfilter/MultiRangeSlider";

const CampingPageSearchBar = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className="bg-slate-200 py-4 px-4 w-200 mx-auto mb-10 rounded-md">
      <form action="" className="flex justify-between gap-10">
        <input
          type="text"
          placeholder="Search for campings..."
          defaultValue={searchParams.name || ""}
          className="p-2 w-full bg-slate-300 rounded-md"
          name="name"
        />
        <div className="w-full flex flex-col gap-2">
          <MultiRangeSlider min={searchParams.min || "0"} max={searchParams.max || "150"} />
        </div>
        <button className="py-3 bg-slate-600 rounded-lg text-white w-40 font-semibold text-md hover:cursor-pointer hover:bg-slate-400 transition-color duration-200 ease-in-out">
          Search
        </button>
      </form>
    </div>
  );
};
export default CampingPageSearchBar;
