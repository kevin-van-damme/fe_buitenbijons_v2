import { Camping } from "@/types";
import Link from "next/link";

const FrontPageCards = async () => {
  const res = await fetch("http://localhost:3000/api/campings");
  const data: Camping[] = await res.json();
  return (
    <Link href="/">
      <div className="max-w-78 h-80 rounded-3xl">
        <img src="/frontpage/home_page_image.jpg" alt="" className="block object-cover h-full rounded-t-3xl" />
        <div className="bg-green-800 text-center rounded-b-3xl text-white">
          {data && data.length > 0 ? (
            data.map((camping: Camping) => (
              <div key={camping.id}>
                <h3 className="text-2xl">{camping.attributes.title}</h3>
                <p className="text-lg">{camping.attributes.field_camping_description}</p>
              </div>
            ))
          ) : (
            <p>There seems to be a problem loading the campings...</p>
          )}
        </div>
      </div>
    </Link>
  );
};
export default FrontPageCards;
