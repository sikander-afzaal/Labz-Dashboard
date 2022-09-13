import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import NftSmallBox from "../../components/NftSmallBox/NftSmallBox";
import NftBigBox from "../../components/NftBigBox/NftBigBox";
import MarketCard from "../../components/MarketCard/MarketCard";
function Dashboard__NFT() {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          width: "100%",
          autoWidth: true,
          perMove: 1,
          arrows: true,
          pagination: false,
          drag: "free",
          breakpoints: {
            553: {
              arrows: false,
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
            arrows: true,
            autoWidth: true,
            pagination: false,
            drag: "free",
            breakpoints: {
              553: { arrows: false },
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
            arrows: true,
            autoWidth: true,
            pagination: false,
            drag: "free",
            breakpoints: {
              553: { arrows: false },
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
          <SplideSlide>
            <NftBigBox img={"./assets/hulk.jpg"} text={"TNES"} />
          </SplideSlide>
        </Splide>
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
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
          </Splide>
        </div>{" "}
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
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
            <SplideSlide>
              {" "}
              <MarketCard
                img={"./assets/hulk.jpg"}
                rarity="Uncommon+"
                name={"Disney D"}
                number="671"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Dashboard__NFT;
