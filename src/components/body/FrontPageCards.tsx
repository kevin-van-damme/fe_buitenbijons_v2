import Link from "next/link";

const FrontPageCards = () => {
  return (
    <Link href="/" className="max-w-78 h-80 rounded-3xl">
      <div className="h-full">
        <img src="/home_page_image.jpg" alt="" className="block object-cover h-full rounded-t-3xl" />
      </div>
      <div className="bg-green-800 text-center rounded-b-3xl text-white">
        <h3 className="text-2xl">Title</h3>
        <p className="text-lg">Text</p>
      </div>
    </Link>
  );
};
export default FrontPageCards;
