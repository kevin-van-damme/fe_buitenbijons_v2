import AboutPageImage from "@/components/aboutpage/AboutPageImage";
import Article from "@/components/aboutpage/Article";
import type { Camping } from "@/types";

const page = async () => {
  return (
    // <pre>{JSON.stringify(data, null, 2)}</pre>
    <div className="flex flex-col w-300 mx-auto my-10">
      <AboutPageImage />
      <Article />
    </div>
  );
};

export default page;
