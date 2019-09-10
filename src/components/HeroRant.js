import React from "react";
import { Link, NavLink } from "react-router-dom";
const HeroRant = props => {
  return (
    <div>
      <h3>Tell Us What makes your Hero The Best!</h3>

      <input placeholder="Rant Away"></input>
      <Link to="/Home">HOME</Link>
    </div>
  );
};

export default HeroRant;
