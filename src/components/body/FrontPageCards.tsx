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
    <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
      {campings?.length > 0 ? (
        campings.map((camping: Camping) => (
          <Link
            href={`campings/${camping.uuid.value}`}
            key={camping.uuid.value}
            className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          >
            <div className="shadow-xl/30 rounded-3xl">
              <Image
                src={camping.field_camping_image[0].url}
                alt={camping.field_camping_image[0].alt}
                width={250}
                height={250}
                className="block object-cover rounded-t-3xl"
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
