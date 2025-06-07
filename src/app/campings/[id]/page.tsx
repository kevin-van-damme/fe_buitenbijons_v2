import { slugit } from "@/helpers";
import type { CampingData, Campings, PageParams } from "@/types";

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { id } = await params;
  const res = await fetch(`https://be-buitenbijons-v2.ddev.site:33001/jsonapi/node/campings/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data: CampingData = await res.json();
  return {
    title: data.data.attributes.title,
    description: data.data.attributes.field_camping_description,
    owner: data.data.relationships.field_owner_id.links.related.href,
  };
}

const page = async ({ params }: { params: Promise<PageParams> }) => {
  const { id } = await params;
  const res = await fetch(`https://be-buitenbijons-v2.ddev.site:33001/jsonapi/node/campings/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data: CampingData = await res.json();
  // console.log("fetched data", data);
  const ownerRes = await fetch(data.data.relationships.field_owner_id.links.related.href);
  const ownerData = await ownerRes.json();
  // console.log("owner data", ownerData);
  const imageRes = await fetch(data.data.relationships.field_camping_image.links.related.href);
  const imageData = await imageRes.json();
  const baseUrl = "https://be-buitenbijons-v2.ddev.site:33001/";
  const relativeImageUrl = imageData.data.attributes.uri.url;
  const imageUrl = `${baseUrl}${relativeImageUrl}`;
  // console.log("imageUrl", imageUrl);

  return (
    <>
      <div className="flex flex-col gap-2 justify-center mx-auto max-w-6xl">
        <div>
          <img src={imageUrl} alt={data.data.attributes.title} />
        </div>
        <h1 className="text-4xl font-bold">{data.data.attributes.title}</h1>

        <div className="flex flex-row gap-5 justify-between">
          <div className="flex flex-row gap-5 bg-slate-200 w-fit p-5 rounded-2xl">
            Contact
            <p>Owner: {ownerData.data.attributes.title}</p>
            <a href={`mailto:${ownerData.data.attributes.field_owner_mail}`} className="underline hover:text-blue-500 transition-all ease-in-out">
              Email: {ownerData.data.attributes.field_owner_mail}
            </a>
          </div>
          <div className="flex flex-row gap-5 bg-slate-200 w-fit p-5 rounded-2xl">
            <p>Price: €{data.data.attributes.field_camping_price}/night</p>
          </div>
        </div>
        <div className="px-20 py-10 bg-green-200 rounded-2xl">
          <p>{data.data.attributes.field_camping_description}</p>
        </div>
        <p>{data.data.attributes.field_camping_location.value}</p>
      </div>
      {/* <pre>{JSON.stringify(data.data, null, 2)}</pre> */}
    </>
  );
};
export default page;

export async function generateStaticParams() {
  const res = await fetch("https://be-buitenbijons-v2.ddev.site:33001/jsonapi/node/campings", {
    next: {
      revalidate: 60,
    },
  });
  const data: Campings = await res.json();
  return data.data.map((camping) => ({
    id: camping.id,
  }));
}
