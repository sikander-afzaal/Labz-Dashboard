import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faPaste } from "@fortawesome/free-regular-svg-icons";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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

import { useNavigate } from "react-router-dom";

import "./Inventory.css";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";
import NftSmallBox from "../../components/NftSmallBox/NftSmallBox";
import NftBigBox from "../../components/NftBigBox/NftBigBox";

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
            <div className="inventory__selected">
              <FontAwesomeIcon icon={faHorse} />
              <span>NFT</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCoins} />
              <span>Tokens</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              <span>Transactions</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faRotate} />
              <span>Swap</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faChartLine} />
              <span>Activity</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGrip} />
              <span>App</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </div>
          </div>

          <div className="inventory__centerRight">
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                width: "100%",
                perMove: 1,
                arrows: false,
                perPage: 4,
                pagination: false,
                drag: "free",
                breakpoints: {
                  1000: {
                    perPage: 3,
                  },
                  553: {
                    perPage: 2,
                  },
                },
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <NftSmallBox img={"./assets/hulk.jpg"} text={"Collectibles"} />
              </SplideSlide>
              <SplideSlide>
                <NftSmallBox img={"./assets/hulk.jpg"} text={"Collectibles"} />
              </SplideSlide>
              <SplideSlide>
                <NftSmallBox img={"./assets/hulk.jpg"} text={"Collectibles"} />
              </SplideSlide>
              <SplideSlide>
                <NftSmallBox img={"./assets/hulk.jpg"} text={"Collectibles"} />
              </SplideSlide>
              <SplideSlide>
                <NftSmallBox img={"./assets/hulk.jpg"} text={"Collectibles"} />
              </SplideSlide>
              <SplideSlide>
                <NftSmallBox img={"./assets/hulk.jpg"} text={"Collectibles"} />
              </SplideSlide>
            </Splide>
            <div className="inventory-row">
              <div className="line-div">
                <h1>Latest Drops</h1>
                <div className="line"></div>
              </div>
              <Splide
                options={{
                  gap: "1rem",
                  width: "100%",
                  perMove: 1,
                  arrows: false,
                  perPage: 4,
                  pagination: false,
                  drag: "free",
                  breakpoints: {
                    1400: {
                      perPage: 3,
                    },
                    1000: {
                      perPage: 2,
                    },
                    553: {
                      perPage: 1,
                    },
                  },
                }}
                aria-label="My Favorite Images"
              >
                <SplideSlide>
                  <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
                </SplideSlide>
                <SplideSlide>
                  <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
                </SplideSlide>
                <SplideSlide>
                  <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
                </SplideSlide>
              </Splide>
            </div>
            <div className="inventory-row">
              <div className="line-div">
                <h1>Collectibles</h1>
                <div className="line"></div>
              </div>
              <Splide
                options={{
                  gap: "1rem",
                  width: "100%",
                  perMove: 1,
                  arrows: false,
                  perPage: 4,
                  pagination: false,
                  drag: "free",
                  breakpoints: {
                    1400: {
                      perPage: 3,
                    },
                    1000: {
                      perPage: 2,
                    },
                    553: {
                      perPage: 1,
                    },
                  },
                }}
                aria-label="My Favorite Images"
              >
                <SplideSlide>
                  <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
                </SplideSlide>
                <SplideSlide>
                  <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
                </SplideSlide>
                <SplideSlide>
                  <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
                </SplideSlide>
                <SplideSlide>
                  <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>

      <div className="inventory__footerWrapper">
        <div className="inventory__footer">
          <div className="inventory__selected">
            <FontAwesomeIcon icon={faHorse} />
            <span>NFT</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCoins} />
            <span>Tokens</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <span>Transactions</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faRotate} />
            <span>Swap</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faChartLine} />
            <span>Activity</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGrip} />
            <span>App</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
