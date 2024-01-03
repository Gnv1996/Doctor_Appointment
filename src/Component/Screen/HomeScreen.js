import React from "react";
import "../../App.css";
import doctor from "../../assests/doctor.jpeg";

function HomeScreen() {
  return (
    <div class="relative overflow-hidden rounded-lg w-11/12 ml-10">
      <div className="homelogo ml-35">
        <img src={doctor} alt="Loading" className="object-cover" />
      </div>
    </div>
  );
}

export default HomeScreen;
