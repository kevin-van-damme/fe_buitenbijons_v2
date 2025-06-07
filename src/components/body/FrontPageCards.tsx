import { Campings } from "@/types";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { drupal } from "@/lib/drupal";
import type { DrupalNode } from "next-drupal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campings",
  description: "Campings in Belgium",
};

const FrontPageCards = async () => {
  const res = await fetch("https://be-buitenbijons-v2.ddev.site:33001/jsonapi/node/campings", {
    next: {
      revalidate: 60,
    },
  });
  const data: Campings = await res.json();
  //console.log(data);

  return (
    <>
      {data && data.data.length > 0 ? (
        data.data.map((camping) => (
          <Link href={`/campings/${camping.id}`} key={camping.id}>
            <div>
              <img src="/frontpage/home_page_image.jpg" alt="" className="block object-cover rounded-t-3xl w-full h-full" />
              <div key={camping.id} className="bg-green-800 py-5 text-center rounded-b-3xl text-white">
                <h3 className="text-md">{camping.attributes.title}</h3>
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
