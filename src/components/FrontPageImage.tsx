const FrontPageImage = () => {
  return (
    <>
      <div>
        <img src="/home_page_image.jpg" alt="" className="block object-fit w-full h-125 object-cover" />
      </div>
      <div className="bg-blue-200 py-5 ">
        <div className="mx-auto max-w-6xl">
          <ul className="flex justify-around">
            <li>Midden in de natuur</li>
            <li>Weg van de massa</li>
            <li>Draag bij aan natuurprojecten</li>
          </ul>
        </div>
      </div>
      <div className="bg-amber-100 h-200">Hier komt vanalles</div>
    </>
  );
};
export default FrontPageImage;
