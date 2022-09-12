import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import "./FeedCard.css";
function FeedCard({ img, name, profilePic }) {
  return (
    <div className="feed-card">
      <div className="top-feed-card">
        <img src={profilePic} alt="" />
        <p>{name}</p>
      </div>
      <img className="main-feed-img" src={img} alt="" />
      <div className="bottom-name-feed">
        <div className="name-feed">
          <h2>Partners Statue</h2>
          <p>Ultra Rare</p>
        </div>
        <h3 className="caption">
          <strong>{name}</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate, ut.
        </h3>
        <div className="view-store">
          <button>View in Store</button>
          <p>333</p>
        </div>
        <div className="like-row">
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div>
            <p>
              2 minutes <FontAwesomeIcon icon={faBookmark} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
