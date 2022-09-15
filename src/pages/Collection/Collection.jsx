import {
  faArrowUpFromBracket,
  faChevronUp,
  faGear,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Collection.css";
function Collection() {
  return (
    <div className="collection">
      <div className="collection-box">
        <div className="collection-line">
          <h2>My Showrooms</h2>
          <div className="line"></div>
          <p>ADD</p>
          <FontAwesomeIcon icon={faGear} />
        </div>
        <img src="/assets/hulk.jpg" alt="" />
        <div className="bottom-collection-box">
          <h1>Virtual</h1>
          <div className="right-box">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>
      </div>
      <div className="collection-box">
        <div className="collection-line">
          <h2>My Collectibles</h2>
          <div className="line"></div>
          <p>See All</p>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div className="grey-coll">
          <h1>You dont have any Showrooms</h1>
          <button>Create One</button>
        </div>
      </div>
      <div className="collection-box">
        <div className="collection-line">
          <h2>My Comics</h2>
          <div className="line"></div>
          <p>See All</p>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div className="grey-coll">
          <h1>You dont have any Showrooms</h1>
          <button>Create One</button>
        </div>
      </div>
    </div>
  );
}

export default Collection;
