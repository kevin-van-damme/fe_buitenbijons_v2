import type { Camping, PageParams } from "@/types";

const CampingDetailPageImage = async ({ params }: { params: Promise<PageParams> }) => {
  const { id } = await params;
  const res = await fetch(`https://be-buitenbijons-v2.ddev.site:33001/jsonapi/node/campings/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data: Camping = await res.json();
  const imageRes = await fetch(data.data.relationships.field_camping_image.links.related.href);
  const imageData = await imageRes.json();
  const baseUrl = "https://be-buitenbijons-v2.ddev.site:33001/";
  const relativeImageUrl = imageData.data.attributes.uri.url;
  const imageUrl = `${baseUrl}${relativeImageUrl}`;

  return (
    <div className="mb-10">
      <img src={imageUrl} alt={data.data.attributes.title} className="block w-full h-fit object-cover rounded-t-lg shadow-lg" />
    </div>
  );
};
export default CampingDetailPageImage;
