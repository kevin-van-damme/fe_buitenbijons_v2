import CampingDetailPageImage from "@/components/detailpage/CampingDetailPageImage";
import type { PageParams } from "@/types";
import type { Camping } from "@/typesCampings";
import { getCampingByIdDrupalQuery, getOwnerByIdDrupalQuery } from "@/queries";
import type { Owner, Owners } from "@/typesOwners";

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { id } = await params;
  const data = await getCampingByIdDrupalQuery(id);
  return {
    title: data.title[0].value,
    description: data.field_camping_description[0].value,
    // owner: data.field_owner_id[0].target_uuid,
  };
}

const page = async ({ params }: { params: Promise<PageParams> }) => {
  const { id } = await params;
  const data = await getCampingByIdDrupalQuery(id);
  console.log(data.field_owner_id);

  return (
    <>
      <div className="flex flex-col gap-6 justify-center mx-auto max-w-6xl p-4 bg-white shadow-lg rounded-lg">
        <CampingDetailPageImage params={params} />
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{data.title[0].value}</h1>
        {/* <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Contact</h2>
            <p className="text-gray-600">Owner: {ownerData.data.attributes.title}</p>
            <a
              href={`mailto:${ownerData.data.attributes.field_owner_mail}`}
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Email: {ownerData.data.attributes.field_owner_mail}
            </a>
          </div>
          <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Price: €{data.field_camping_price.value}/night</p>
          </div>
        </div> */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: data.field_camping_description[0].value }} />
        </div>
        <p className="text-gray-600">{data.field_camping_location.value}</p>
      </div>
      {/* <pre>{JSON.stringify(data.data, null, 2)}</pre> */}
    </>
  );
};
export default page;

export async function generateStaticParams() {
  const res = await fetch("https://be-buitenbijons-test.ddev.site:33003/api/v1/campings", {
    next: {
      revalidate: 60,
    },
  });
  const data: Camping[] = await res.json();
  return data.map((camping: Camping) => ({
    id: camping.uuid[0].value,
  }));
}
