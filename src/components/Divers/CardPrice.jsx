import React from "react";
import "../../styles/components/CardPrice.css";
import H3 from "./H3";
import Paragraph from "./Paragraph";

const CardPrice = () => {
  return (
    <div id="CardPrice">
      <Paragraph>
        <span className="font-bold text-center">
          Montant de l'inscription pour les cours de Théatre
        </span>
      </Paragraph>
      <div className="price-container">
        <H3>240€ </H3>
        <Paragraph>/an</Paragraph>
      </div>
    </div>
  );
};

export default CardPrice;
