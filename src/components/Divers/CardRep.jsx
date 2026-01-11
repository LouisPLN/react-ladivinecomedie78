import React, { useState } from "react";
import Arrow from "../../assets/images/icon-arrow.svg";
import Paragraph from "./Paragraph";
import IconMap from "../../assets/images/icon-map.svg";

const CardRep = ({ event }) => {
  const { date, location, eventName, piecePlayed } = event;
  return (
    <div className="card">
      <h3>{date}</h3>
      <div className="hr"></div>
      <p>
        <img className="icon-map" src={IconMap} alt="Map Icon" />
        <span className="text-blue font-bold">{location}</span>
      </p>
      <p>
        Nom de l'évènement : <span className="font-bold">{eventName}</span>
      </p>
      <p className="play">
        Pièce jouée : <span className="font-bold">{piecePlayed}</span>
      </p>
    </div>
  );
};

export default CardRep;
