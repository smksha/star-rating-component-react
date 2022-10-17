import React from "react";

const StarButton = ({ isFilled, onStarClick, onStarHover, onStarLeave }) => {
  return (
    <button
      onClick={onStarClick}
      onMouseEnter={onStarHover}
      onMouseLeave={onStarLeave}
    >
      {isFilled ? `★` : `☆`}
    </button>
  );
};

export default StarButton;
