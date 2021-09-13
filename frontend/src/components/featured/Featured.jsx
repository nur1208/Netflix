import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Buttons,
  Category,
  FeaturedContainer,
  Info,
} from "./featuredSC";

export const Featured = ({ type }) => {
  return (
    <FeaturedContainer id="FeaturedContainer">
      {type && (
        <Category id="Category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          {/* TODO render options */}
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </Category>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <Info id="Info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae adipisci repellendus eum quasi illo, velit numquam,
          maxime tempora sint deleniti, aliquid qui? Facilis,
          adipisci! Ratione hic repudiandae temporibus eum earum?
        </span>

        <Buttons id="Buttons">
          <Link to="/watch">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </Buttons>
      </Info>
    </FeaturedContainer>
  );
};
