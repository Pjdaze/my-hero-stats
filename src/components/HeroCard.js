import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";

const HeroCard = ({ images, name, onFlipped }) => {
  return (
    <HeroCardWrapper>
      <img src={images} alt="heroes" />
      <div className="info">
        <h2>{name}</h2>
      </div>

      <button onClick={onFlipped}>Flip Card</button>
    </HeroCardWrapper>
  );
};

export default HeroCard;
