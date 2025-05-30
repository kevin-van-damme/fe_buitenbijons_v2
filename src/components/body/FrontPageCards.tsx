import { Camping } from "@/types";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { drupal } from "@/lib/drupal";
import type { DrupalNode } from "next-drupal";
import Link from "next/link";

const FrontPageCards = async () => {
  const res = await fetch("http://localhost:3000/api/campings");
  const data: (Pick<Camping, "id"> & Camping["attributes"])[] = await res.json();
  console.log(data);
  // const params = new DrupalJsonApiParams()
  //   .addFields("node--camping", ["title", "field_camping_image", "field_description", "field_camping_location", "field_price_per_night"])
  //   .addFilter("status", "1")
  //   .addSort("created", "DESC");

  // const nodes = await drupal.getResourceCollection<DrupalNode[]>("node--camping", {
  //   params: {
  //     include: "field_camping_image",
  //   },
  // });
  return (
    <>
      {data && data.length > 0 ? (
        <Link href="/">
          <div className="max-w-78 h-80 rounded-3xl">
            <img src="/frontpage/home_page_image.jpg" alt="" className="block object-cover h-full rounded-t-3xl" />
            <div className="bg-green-800 text-center rounded-b-3xl text-white">
              {data.map((camping) => (
                <div key={camping.id}>
                  <h3 className="text-md">{camping.title}</h3>
                  <p className="text-lg">{camping.field_camping_description}</p>
                </div>
              ))}
            </div>
          </div>
        </Link>
      ) : (
        <p>There seems to be a problem loading the campings...</p>
      )}
    </>
  );
};

export default FrontPageCards;
