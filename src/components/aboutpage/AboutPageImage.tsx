import type { Camping } from "@/types";

const AboutPageImage = async ({ data }: { data: Camping }) => {
  const resImage = await fetch(data.data.relationships.field_image.links.related.href);
  const imageData = await resImage.json();
  const relativeImageUrl = imageData.data.attributes.uri.url;
  const baseUrl = "https://be-buitenbijons-v2.ddev.site:33001/";
  const imageUrl = `${baseUrl}${relativeImageUrl}`;
  console.log(relativeImageUrl);
  console.log(imageUrl);
  return (
    <div className="flex flex-row gap-10">
      <img src={imageUrl} alt="About" className="w-1/2 h-1/2 object-cover rounded-2xl" />
    </div>
  );
};
export default AboutPageImage;
