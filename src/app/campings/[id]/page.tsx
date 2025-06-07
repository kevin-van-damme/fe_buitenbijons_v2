import { slugit } from "@/helpers";
import type { CampingData, Campings } from "@/types";

interface PageParams {
  id: string;
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { id } = await params;
  const res = await fetch(`https://be-buitenbijons-v2.ddev.site:33003/jsonapi/node/campings/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data: CampingData = await res.json();
  return {
    title: data.data.attributes.title,
    description: data.data.attributes.field_camping_description,
  };
}

const page = async ({ params }: { params: Promise<PageParams> }) => {
  const { id } = await params;
  const res = await fetch(`https://be-buitenbijons-v2.ddev.site:33003/jsonapi/node/campings/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data: CampingData = await res.json();
  return (
    <div>
      <pre>{JSON.stringify(data.data, null, 2)}</pre>
    </div>
  );
};
export default page;

export async function generateStaticParams() {
  const res = await fetch("https://be-buitenbijons-v2.ddev.site:33003/jsonapi/node/campings", {
    next: {
      revalidate: 60,
    },
  });
  const data: Campings = await res.json();
  return data.data.map((camping) => ({
    id: camping.id,
  }));
}
