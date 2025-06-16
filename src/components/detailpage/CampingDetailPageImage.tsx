import type { PageParams } from "@/types";
import type { Camping } from "@/typesCampings";

const CampingDetailPageImage = async ({ params }: { params: Promise<PageParams> }) => {
  const { id } = await params;
  const res = await fetch(`https://be-buitenbijons-test.ddev.site:33003/api/v1/campings/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data: Camping = await res.json();
  const imageUrl = data.field_camping_image[0].url;

  return (
    <div className="mb-10">
      <img src={imageUrl} alt={data.title[0].value} className="block w-full h-fit object-cover rounded-t-lg shadow-lg" />
    </div>
  );
};
export default CampingDetailPageImage;
