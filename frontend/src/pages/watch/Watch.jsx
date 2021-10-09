import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { WatchContainer } from "./watchSC";

export const Watch = () => {
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
        src="https://imdb-video.media-imdb.com/vi3757621273/1434659607842-pgv4ql-1618413460613.mp4?Expires=1633176505&Signature=QiqhOd3LNom48EY52~f-U7mdHVGEc8NsO4t7oRUXWYT7JSA4ERT7WALlcZ8ZokKn5eJlYwV7Lx1QzHkpjWXx9MX2aL9EgeuSsqfQKI5e-Dg3jeulEMLOTCfHnrCdFfopNrD6RJ~v5vGVjO~s4I-81AtpG4tuo07ZMNLeLeNX5tJejRFbLIwO9CkKK2wS--k2Bid15x831G49FfaduZEaWL-xzSHaOrJCec9NI1K9SNxaR3gu7vu65U6dU6Uy3bowwukUwKb9oc36r50cmkzUt3yhvKGTh-dA~XqwB5ngvkBgOlQ0dFSiH27oUCYoOurF7iGe9vra8sDPpynyX2W2cA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      />
    </WatchContainer>
  );
};
