import React from "react";
import "./MarketCard.css";
function MarketCard({ img, name, rarity, number }) {
  return (
    <div className="market-card">
      <div className="number-card">{number}</div>
      <img src={img} alt="" />
      <h2 className="layer1">{name}</h2>
      <div className="layer2">
        <h3>{rarity}</h3>
      </div>
    </div>
  );
}

export default MarketCard;
