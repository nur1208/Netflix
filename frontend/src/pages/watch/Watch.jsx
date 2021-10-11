import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { WatchContainer } from "./watchSC";
import { useParams } from "react-router-dom";

export const Watch = () => {
  const { trailerUrl } = useParams();

  return (
    <WatchContainer id="WatchContainer">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <video
        className="video"
        autoPlay
        progress
        controls
        src={`http://localhost:5000/videos/${trailerUrl}`}
      />
    </WatchContainer>
  );
};
