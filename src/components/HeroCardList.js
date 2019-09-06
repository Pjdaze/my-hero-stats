import React from "react";
import HeroCard from "../components/HeroCard";
import ScrollBox from "./ScrollBox";
import FlippedCard from "./FlippedCard";

//const ManageMembers = function(member) {
//  if (!member.length) {
//    return "loading page";
//  } else {
//    return member.map(x => x.name);
//  }
//};

export const HeroCardList = ({ heroes }) => {
  return (
    <ScrollBox>
      {" "}
      {heroes.map((user, i) => {
        return (
          <HeroCard
            key={i}
            name={heroes[i].name}
            images={heroes[i].images.lg}
          />
        );
      })}
    </ScrollBox>
  );
};

export const FlippedCardList = ({ heroes, handleClick }) => {
  return (
    <ScrollBox>
      {" "}
      {heroes.map((user, i) => {
        return (
          <FlippedCard
            key={i}
            name={heroes[i].name}
            appearance={heroes[i].appearance}
            biography={heroes[i].biography}
            onClick={handleClick}
          />
        );
      })}
    </ScrollBox>
  );
};
