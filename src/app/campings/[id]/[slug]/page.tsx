import { slugit } from "@/helpers";

interface PageParams {
  id: string;
}

const page = async ({ params }: { params: PageParams }) => {
  const { id } = await params;
  const data = await fetch(`http://localhost:3000/api/campings/node/${id}`);
  return <div>Dit is een detail pagina van een camping</div>;
};
export default page;
