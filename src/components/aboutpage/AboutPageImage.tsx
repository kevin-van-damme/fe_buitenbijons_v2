import { getArticleByIdDrupalQuery } from "@/queries";
import Image from "next/image";

const AboutPageImage = async () => {
  const data = await getArticleByIdDrupalQuery("bc5613f5-46fc-4c8a-b31c-b15dc50c45ce");
  return (
    <div className="flex flex-row gap-10 mx-auto justify-center">
      <Image src={data.field_image[0].url} alt={data.field_image[0].alt} className="w-1/2 h-1/2 object-cover rounded-2xl" width={500} height={500} />
    </div>
  );
};
export default AboutPageImage;
