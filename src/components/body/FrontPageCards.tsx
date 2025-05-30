import { Camping } from "@/types";
import { JsonApiParams } from "next-drupal";
import { drupal } from "@/lib/drupal";
import { DrupalNode } from "next-drupal";
import Link from "next/link";

const FrontPageCards = async () => {
  const res = await fetch("http://localhost:3000/api/campings");
  // const data: Camping[] = await res.json();
  const data: (Pick<Camping, "id"> & Camping["attributes"])[] = await res.json();
  // const nodes = await drupal.getResourceCollection<DrupalNode>("node--campings", {
  //   params: {
  //     include: "field_camping_image",
  //   },
  // });
  console.log(data);
  return (
    <Link href="/">
      <div className="max-w-78 h-80 rounded-3xl">
        <img src="/frontpage/home_page_image.jpg" alt="" className="block object-cover h-full rounded-t-3xl" />
        <div className="bg-green-800 text-center rounded-b-3xl text-white">
          {data && data.length > 0 ? (
            data.map((camping) => (
              <div key={camping.id}>
                <h3 className="text-md">{camping.title}</h3>
                <p className="text-sm">{camping.field_camping_description}</p>
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
