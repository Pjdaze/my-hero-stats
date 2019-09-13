import React from "react";
import HeroCard from "../components/HeroCard";
import ScrollBox from "./ScrollBox";
import FlippedCard from "../components/FlippedCard";

//const ManageMembers = function(member) {
//  if (!member.length) {
//    return "loading page";
//  } else {
//    return member.map(x => x.name);
//  }
//};

export const HeroCardList = ({ heroes, onFlip }) => {
  return (
    <ScrollBox>
      {heroes.map((x, i) => {
        if (onFlip) {
          return (
            <HeroCard
              key={i}
              name={heroes[i].name}
              images={heroes[i].images.lg}
              onFlip={onFlip}
            />
          );
        } else {
          return (
            <FlippedCard
              key={i}
              name={heroes[i].name}
              appearance={heroes[i].appearance}
              biography={heroes[i].biography}
              onFlip={onFlip}
            />
          );
        }
      })}
    </ScrollBox>
  );
};

//export const FlippedCardList = ({ heroes, onFlipped }) => {
//  return (
//    <ScrollBox>
//      {" "}
//      {heroes.map((user, i) => {
//        return (
//          <FlippedCard
//            key={i}
//            name={heroes[i].name}
//            appearance={heroes[i].appearance}
//            biography={heroes[i].biography}
//            onFlipped={onFlipped}
//          />
//        );
//      })}
//    </ScrollBox>
//  );
//};
