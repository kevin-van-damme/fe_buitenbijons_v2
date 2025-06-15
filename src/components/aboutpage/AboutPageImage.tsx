import { getArticleDrupalQuery } from "@/queries";
import Image from "next/image";

const AboutPageImage = async () => {
  const data = await getArticleDrupalQuery();

  return (
    <div className="flex flex-row gap-10 mx-auto justify-center">
      <Image src={data[0].field_image[0].url} alt="About" className="w-1/2 h-1/2 object-cover rounded-2xl" width={500} height={500} />
    </div>
  );
};
export default AboutPageImage;
