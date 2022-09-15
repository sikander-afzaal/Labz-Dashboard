import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

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
      <div
        className={`overlay ${showDropdown ? "open-overlay" : ""}`}
        onClick={() => {
          setShowDropdown(false);
        }}
      ></div>
      <div className="header__wrapper">
        <div className="inventory__header">
          <div className="inventory__headerLeft">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="inventory__headerBack"
              onClick={() => navigate("/home")}
            />

            <img src="/assets/logo.svg" alt="logo" />
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

      <div className="inventory__centerWrapper">
        <div className="inventory__center">
          <div className="inventory__centerLeft">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "inventory__selected" : ""
              }
            >
              <FontAwesomeIcon icon={faStore} />
              <span>Store</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? " inventory__selected" : ""
              }
              to={"/collection"}
            >
              <FontAwesomeIcon icon={faLayerGroup} />
              <span>Collection</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "inventory__selected" : ""
              }
              to={"/feed"}
            >
              <FontAwesomeIcon icon={faWindowMaximize} />
              <span>Feed</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "inventory__selected" : ""
              }
              to={"/market"}
            >
              <FontAwesomeIcon icon={faStore} />
              <span>Market</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "inventory__selected" : ""
              }
              to={"/profile"}
            >
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
            className={({ isActive }) =>
              isActive ? "inventory__selected" : ""
            }
          >
            <FontAwesomeIcon icon={faStore} />
            <span>Store</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "inventory__selected" : ""
            }
            to={"/collection"}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>Collection</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "inventory__selected" : ""
            }
            to={"/feed"}
          >
            <FontAwesomeIcon icon={faWindowMaximize} />
            <span>Feed</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "inventory__selected" : ""
            }
            to={"/market"}
          >
            <FontAwesomeIcon icon={faStore} />
            <span>Market</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "inventory__selected" : ""
            }
            to={"/profile"}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}
