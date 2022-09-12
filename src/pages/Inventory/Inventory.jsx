import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faPaste,
  faWindowMaximize,
} from "@fortawesome/free-regular-svg-icons";

import {
  faChevronLeft,
  faStore,
  faLayerGroup,
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

            <img src="assets/logo.svg" alt="logo" />
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
              <FontAwesomeIcon icon={faStore} />
              <span>Store</span>
            </NavLink>
            <NavLink to={"/collection"}>
              <FontAwesomeIcon icon={faLayerGroup} />
              <span>Collection</span>
            </NavLink>
            <NavLink to={"/feed"}>
              <FontAwesomeIcon icon={faWindowMaximize} />
              <span>Feed</span>
            </NavLink>
            <NavLink to={"/path"}>
              <FontAwesomeIcon icon={faStore} />
              <span>Market</span>
            </NavLink>
            <NavLink to={"/feed"}>
              <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
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
            <FontAwesomeIcon icon={faStore} />
            <span>Store</span>
          </NavLink>
          <NavLink to={"/collection"}>
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>Collection</span>
          </NavLink>
          <NavLink to={"/feed"}>
            <FontAwesomeIcon icon={faWindowMaximize} />
            <span>Feed</span>
          </NavLink>
          <NavLink to={"/path"}>
            <FontAwesomeIcon icon={faStore} />
            <span>Market</span>
          </NavLink>
          <NavLink to={"/feed"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}
