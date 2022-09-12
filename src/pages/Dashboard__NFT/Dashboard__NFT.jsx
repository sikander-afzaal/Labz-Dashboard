import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import NftSmallBox from "../../components/NftSmallBox/NftSmallBox";
import NftBigBox from "../../components/NftBigBox/NftBigBox";
function Dashboard__NFT() {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          width: "100%",
          perMove: 1,
          arrows: true,
          perPage: 4,
          pagination: false,
          drag: "free",
          breakpoints: {
            1000: {
              perPage: 3,
            },
            553: {
              arrows: false,
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
            arrows: true,
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
              553: { arrows: false, perPage: 1 },
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
              553: { arrows: false, perPage: 1 },
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
      </div>
    </>
  );
}

export default Dashboard__NFT;
