import { Camping } from "@/types";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { drupal } from "@/lib/drupal";
import type { DrupalNode } from "next-drupal";
import Link from "next/link";

const FrontPageCards = async () => {
  const res = await fetch("http://localhost:3000/api/campings");
  const data: (Pick<Camping, "id"> & Camping["attributes"])[] = await res.json();
  console.log(data);

  return (
    <>
      {data && data.length > 0 ? (
        data.map((camping) => (
          <Link href="/">
            <div>
              <img src="/frontpage/home_page_image.jpg" alt="" className="block object-cover rounded-t-3xl w-full h-full" />
              <div key={camping.id} className="bg-green-800 py-5 text-center rounded-b-3xl text-white">
                <h3 className="text-md">{camping.title}</h3>
                <p className="text-lg">{camping.field_camping_description}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>There seems to be a problem loading the campings...</p>
      )}
    </>
  );
};

export default FrontPageCards;
