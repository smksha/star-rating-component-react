import "./styles.css";
import React, { useState } from "react";
import StarRating from "./components/StartRating";

export default function App() {
  const [totalStars, setTotalStars] = useState();

  const handleTotalStarsChange = (e) => {
    console.log(e.target.value);
    setTotalStars(parseInt(e.target.value, 10));
  };
  return (
    <div className="App">
      <StarRating totalStars={totalStars} />
      <div>
        <p>Total Number of Stars</p>
        <input
          type="number"
          min={1}
          value={totalStars}
          onChange={handleTotalStarsChange}
        />
      </div>
    </div>
  );
}
