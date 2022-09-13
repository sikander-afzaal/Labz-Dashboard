import {
  faArrowRightFromBracket,
  faChevronRight,
  faGear,
  faPercent,
  faQrcode,
  faUserPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="top-profile">
        <img src="./assets/hulk.jpg" alt="" />
        <div className="profile-info">
          <h1>Hulk23</h1>
          <div className="bottom-info">
            <div className="box-info">
              <h2>0</h2>
              <p>Collectibles</p>
            </div>
            <div className="box-info">
              <h2>0</h2>
              <p>Comics</p>
            </div>
            <div className="box-info">
              <h2>0</h2>
              <p>Full Sets</p>
            </div>
            <div className="box-info">
              <h2>0</h2>
              <p>Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-profile">
        <div className="profile-row">
          <div className="left-profile">
            <FontAwesomeIcon icon={faWallet} />
            <p>Wallet</p>
          </div>
          <div className="right-profile">
            <h2>0.00</h2>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="profile-row">
          <div className="left-profile">
            <FontAwesomeIcon icon={faGear} />
            <p>Profile</p>
          </div>
          <div className="right-profile">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="profile-row">
          <div className="left-profile">
            <FontAwesomeIcon icon={faUserPlus} />
            <p>Following</p>
          </div>
          <div className="right-profile">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="profile-row">
          <div className="left-profile">
            <FontAwesomeIcon icon={faPercent} />
            <p>Promo Code</p>
          </div>
          <div className="right-profile">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="no-gap">
          <div className="profile-row">
            <div className="left-profile">
              <FontAwesomeIcon icon={faQrcode} />
              <p>My QR Code</p>
            </div>
            <div className="right-profile">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="profile-row">
            <div className="left-profile">
              <FontAwesomeIcon icon={faGear} />
              <p>Settings</p>
            </div>
            <div className="right-profile">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="profile-row">
            <div className="left-profile">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p>Sign Out</p>
            </div>
            <div className="right-profile">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
