import React from "react";
import StarButton from "./StarButton";

const StarRating = ({ totalStars = 5 }) => {
  return (
    <div>
      {totalStars > 0 &&
        [...Array(totalStars)].map((starele, idx) => {
          return <StarButton isFilled={true} key={idx} />;
        })}
    </div>
  );
};
export default StarRating;
