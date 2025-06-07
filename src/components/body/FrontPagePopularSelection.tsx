import FrontPageCards from "./FrontPageCards";
import FrontPagePopSecCards from "./FrontPagePopSecCards";
import Link from "next/link";

const FrontPagePopularSelection = () => {
  return (
    <div className="py-10">
      <div className=" flex flex-col mx-auto max-w-5xl">
        <h3 className="font-semibold text-2xl text-slate-800">Popular camping destinations</h3>
        <div className="mt-5">
          <ul className="flex flex-row justify-around gap-10">
            <li>
              <Link href="">
                <FrontPagePopSecCards />
              </Link>
            </li>
            <li>
              <Link href="">
                <FrontPagePopSecCards />
              </Link>
            </li>
            <li className="shadow-2xl rounded-2xl">
              <Link href="">
                <FrontPagePopSecCards />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FrontPagePopularSelection;
