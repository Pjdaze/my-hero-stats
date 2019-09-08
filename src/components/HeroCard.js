import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";

const HeroCard = ({ images, name, handleClick, flip }) => {
  return (
    <HeroCardWrapper>
      <img src={images} alt="heroes" />
      <div className="info">
        <h2>{name}</h2>
        <button onClick={flip}>Flip Card</button>
      </div>
    </HeroCardWrapper>
  );
};

export default HeroCard;
