import React from "react";
import "./NftSmallBox.css";
function NftSmallBox({ img, text }) {
  return (
    <div className="inventory-box">
      <img src={img} alt="" />
      <p className="inven-box-text">{text}</p>
    </div>
  );
}

export default NftSmallBox;
