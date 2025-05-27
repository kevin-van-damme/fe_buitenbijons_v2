import FrontPageBanner from "../body/FrontPageBanner";
import FrontPagePopularSelection from "../body/FrontPagePopularSelection";
import FrontPageStyleSelection from "../body/FrontPageStyleSelection";

const FrontPageBody = () => {
  return (
    <>
      <FrontPageBanner />
      <FrontPageStyleSelection />
      <FrontPagePopularSelection />
    </>
  );
};
export default FrontPageBody;
