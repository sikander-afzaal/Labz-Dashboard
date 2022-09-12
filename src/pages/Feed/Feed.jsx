import React from "react";
import "./Feed.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import FeedCard from "../../components/FeedCard/FeedCard";
function Feed() {
  return (
    <div className="feed">
      <Splide
        options={{
          pagination: false,
          arrows: false,
          width: "100%",
          drag: "free",
          gap: "1rem",
          autoWidth: true,
        }}
        className="category-feed"
      >
        <SplideSlide>
          <h2>F4f</h2>
        </SplideSlide>
        <SplideSlide>
          <h2>Disney</h2>
        </SplideSlide>
        <SplideSlide>
          <h2>Marvel</h2>
        </SplideSlide>
        <SplideSlide>
          <h2>L4L</h2>
        </SplideSlide>
        <SplideSlide>
          <h2>Disney Golden Moments</h2>
        </SplideSlide>
      </Splide>
      <div className="feed-grid">
        <FeedCard
          img={"./assets/hulk.jpg"}
          profilePic={"./assets/hulk.jpg"}
          name="Nuke48"
        />
        <FeedCard
          img={"./assets/hulk.jpg"}
          profilePic={"./assets/hulk.jpg"}
          name="Nuke48"
        />
        <FeedCard
          img={"./assets/hulk.jpg"}
          profilePic={"./assets/hulk.jpg"}
          name="Nuke48"
        />
        <FeedCard
          img={"./assets/hulk.jpg"}
          profilePic={"./assets/hulk.jpg"}
          name="Nuke48"
        />
      </div>
    </div>
  );
}

export default Feed;
