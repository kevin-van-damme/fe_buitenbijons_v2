import { Camping, Campings } from "@/typesCampings";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Campings",
  description: "Campings in Belgium",
};

const FrontPageCards = async ({ campings }: { campings: Camping[] }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {campings?.length > 0 ? (
        campings.map((camping: Camping) => (
          <Link href={`campings/${camping.nid[0].value}`} key={camping.nid[0].value}>
            <div>
              <Image
                src={camping.field_camping_image[0].url}
                alt={camping.field_camping_image[0].alt}
                width={camping.field_camping_image[0].width}
                height={camping.field_camping_image[0].height}
                className="block object-cover rounded-t-3xl w-full h-full"
              />
              <div className="bg-green-800 py-5 text-center rounded-b-3xl text-white">
                <h3 className="text-md">{camping.title.value}</h3>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>There seems to be a problem loading the campings...</p>
      )}
    </div>
  );
};

export default FrontPageCards;
