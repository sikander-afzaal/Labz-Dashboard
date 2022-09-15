import { faClipboard, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faBrush,
  faChevronRight,
  faClipboardCheck,
  faList,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import MarketCard from "../../components/MarketCard/MarketCard";
import "./Market.css";
function Market() {
  return (
    <div className="market">
      <div className="market-row">
        <div className="market-icon">
          <FontAwesomeIcon icon={faStar} />
          <p>Collectibles</p>
        </div>
        <div className="market-icon">
          <FontAwesomeIcon icon={faBrush} />
          <p>Comics</p>
        </div>
        <div className="market-icon">
          <FontAwesomeIcon icon={faClipboardCheck} />
          <p>My Bids</p>
        </div>
        <div className="market-icon">
          <FontAwesomeIcon icon={faClipboard} />
          <p>Listings</p>
        </div>
        <div className="market-icon">
          <FontAwesomeIcon icon={faTag} />
          <p>Brands</p>
        </div>
      </div>
      <div className="inventory-row">
        <div className="line-div">
          <h1>Collectibles</h1>
          <div className="line"></div>
        </div>
        <Splide
          options={{
            gap: "2rem",
            width: "100%",
            perMove: 1,
            arrows: true,
            autoWidth: true,
            pagination: false,
            drag: "free",
            breakpoints: {
              553: { arrows: false },
            },
          }}
          className="market-slider"
        >
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="inventory-row">
        <div className="line-div">
          <h1>Comics</h1>
          <div className="line"></div>
        </div>
        <Splide
          options={{
            gap: "2rem",
            width: "100%",
            perMove: 1,
            arrows: true,
            autoWidth: true,
            pagination: false,
            drag: "free",
            breakpoints: {
              553: { arrows: false },
            },
          }}
          className="market-slider"
        >
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="inventory-row">
        <div className="line-div">
          <h1>Actions</h1>
          <div className="line"></div>
        </div>
        <Splide
          options={{
            gap: "2rem",
            width: "100%",
            perMove: 1,
            arrows: true,
            autoWidth: true,
            pagination: false,
            drag: "free",
            breakpoints: {
              553: { arrows: false },
            },
          }}
          className="market-slider"
        >
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
          <SplideSlide>
            {" "}
            <MarketCard
              img={"/assets/hulk.jpg"}
              rarity="Uncommon+"
              name={"Disney D"}
              number="671"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="browse-all">
        <FontAwesomeIcon icon={faList} />
        <p>Browse All Collectibles in Market</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}

export default Market;
