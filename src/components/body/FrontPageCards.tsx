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
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 px-2">
      {campings?.length > 0 ? (
        campings.map((camping: Camping) => (
          <Link
            href={`campings/${camping.uuid[0].value}`}
            key={camping.uuid[0].value}
            className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          >
            <div className="shadow-xl/30 rounded-3xl">
              <div className="aspect-[3/2] relative">
                <Image
                  src={camping.field_camping_image[0].url}
                  alt={camping.field_camping_image[0].alt}
                  width={250}
                  height={250}
                  className="block object-cover rounded-t-3xl w-full h-full"
                />
              </div>
              <div className="bg-green-800 py-5 text-center rounded-b-3xl text-white">
                <h3 className="text-md">{camping.title[0].value || "No title"}</h3>
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
