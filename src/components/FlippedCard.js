import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";

const FlippedCard = ({ name, biography, handleClick }) => {
  return (
    <HeroCardWrapper>
      <div className="info">
        <p className="hero-info-heading">Name:</p>
        <p>{name}</p>
        <br />
        <span className="hero-info-heading">Aliases:</span>
        <p>{biography.aliases}</p>
        <br />
        <span className="hero-info-heading">{biography.firstAppearance}</span>
      </div>
      <button onClick={handleClick}>Flip Card</button>
    </HeroCardWrapper>
  );
};

export default FlippedCard;
