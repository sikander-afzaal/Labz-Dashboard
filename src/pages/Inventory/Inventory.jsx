import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faPaste } from "@fortawesome/free-regular-svg-icons";

import {
  faChevronLeft,
  faArrowRightArrowLeft,
  faRotate,
  faHorse,
  faCoins,
  faChartLine,
  faGrip,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "./Inventory.css";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";

export default function Inventory() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="inventory">
      <div className="header__wrapper">
        <div className="inventory__header">
          <div className="inventory__headerLeft">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="inventory__headerBack"
              onClick={() => navigate(-1)}
            />

            <img src="assets/logo-gif.gif" alt="logo" />
          </div>

          <div
            className="inventory__user"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faUser} />

            <ProfileDropdown isActive={showDropdown} />
          </div>
        </div>
      </div>

      <div className="inventory__topWrapper">
        <div className="inventory__top">
          <div className="inventory__topUp">
            <h1>Adamant Duck</h1>

            <span>0.00000 ETH</span>
          </div>

          <div className="inventory__topDown">
            <span className="inventory__id">
              0xbcABf8779720084dB123... <FontAwesomeIcon icon={faPaste} />
            </span>

            <span className="inventory__buy">Buy ETH</span>
          </div>
        </div>
      </div>

      <div className="inventory__centerWrapper">
        <div className="inventory__center">
          <div className="inventory__centerLeft">
            <NavLink
              to={"/"}
              className={(isActive) => (isActive ? " inventory__selected" : "")}
            >
              <FontAwesomeIcon icon={faHorse} />
              <span>NFT</span>
            </NavLink>
            <NavLink to={"/collection"}>
              <FontAwesomeIcon icon={faCoins} />
              <span>Tokens</span>
            </NavLink>
            <NavLink to={"/path"}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              <span>Transactions</span>
            </NavLink>
            <NavLink to={"/path"}>
              <FontAwesomeIcon icon={faRotate} />
              <span>Swap</span>
            </NavLink>
            <NavLink to={"/feed"}>
              <FontAwesomeIcon icon={faChartLine} />
              <span>Activity</span>
            </NavLink>
            <NavLink to={"/path"}>
              <FontAwesomeIcon icon={faGrip} />
              <span>App</span>
            </NavLink>
            <NavLink to={"/path"}>
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </NavLink>
          </div>

          <div className="inventory__centerRight">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="inventory__footerWrapper">
        <div className="inventory__footer">
          <NavLink
            to={"/"}
            className={(isActive) => (isActive ? " inventory__selected" : "")}
          >
            <FontAwesomeIcon icon={faHorse} />
            <span>NFT</span>
          </NavLink>
          <NavLink
            to={"/collection"}
            className={(isActive) => (isActive ? " inventory__selected" : "")}
          >
            <FontAwesomeIcon icon={faCoins} />
            <span>Tokens</span>
          </NavLink>
          <NavLink to={"/path"}>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <span>Transactions</span>
          </NavLink>
          <NavLink to={"/path"}>
            <FontAwesomeIcon icon={faRotate} />
            <span>Swap</span>
          </NavLink>
          <NavLink to={"/feed"}>
            <FontAwesomeIcon icon={faChartLine} />
            <span>Activity</span>
          </NavLink>
          <NavLink to={"/path"}>
            <FontAwesomeIcon icon={faGrip} />
            <span>App</span>
          </NavLink>
          <NavLink to={"/path"}>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}
