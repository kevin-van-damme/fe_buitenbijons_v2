"use client";

import axios from "axios";
import "leaflet/dist/leaflet.css";

const CampingPageLeaflet = async () => {
  // const data = await axios.get("https://be-buitenbijons-v2.ddev.site:33001/jsonapi/views/campings/block_2");

  return (
    <div className="flex justify-around mx-auto mt-10">
      <div>
        <img src="./leaflet/leaflet_mock.png" alt="" className="block object-cover rounded-md w-200" />
      </div>
    </div>
  );
};

export default CampingPageLeaflet;

//url naar de json van de leaflet_allcampings block
// https://be-buitenbijons-v2.ddev.site:33001/jsonapi/views/campings/block_2
// key dat ik moet gebruiken is field_camping_location
// nu is de vraag hoe ik met de lat en long die shit kan laten zien... sheeesh
/*{
          "value": "POINT (3.260536 50.832049)",
          "geo_type": "Point",
          "lat": 50.832049,
          "lon": 3.260536,
          "left": 3.260536,
          "top": 50.832049,
          "right": 3.260536,
          "bottom": 50.832049,
          "geohash": "u1434jwnpuxz",
          "latlon": "50.832049,3.260536"
        }
*/
