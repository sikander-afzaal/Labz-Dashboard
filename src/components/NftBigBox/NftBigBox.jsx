import React from "react";
import "./NftBigBox.css";
function NftBigBox({ img, text }) {
  return (
    <div className="nft-big-box">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default NftBigBox;
