import FrontPageCards from "../body/FrontPageCards";
const FrontPageStyleSelection = () => {
  return (
    <div className="h-full mt-7 mb-20 px-3">
      <div className=" flex flex-col mx-auto max-w-5xl">
        <h3>Choose your style of stay</h3>
        <div className="mt-5">
          <ul className="flex flex-row justify-around gap-10">
            <li>
              <FrontPageCards />
            </li>
            <li>
              <FrontPageCards />
            </li>
            <li>
              <FrontPageCards />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FrontPageStyleSelection;
