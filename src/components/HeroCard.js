import React from "react";
import HeroCardWrapper from "../Wrappers/HeroCardWrapper";
import { NavLink, Link } from "react-router-dom";

const HeroCard = ({ images, name, handleClick }) => {
  return (
    <HeroCardWrapper>
      <img src={images} alt="heroes" />
      <div className="info">
        <h2>{name}</h2>
      </div>
      <button onClick={handleClick}>Flip Card</button>
    </HeroCardWrapper>
  );
};

export default HeroCard;
