import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import {
  Icons,
  ItemInfo,
  ItemInfoTop,
  ListItemContainer,
} from "./listItemSc";

export const ListItem = ({
  index,
  imgURL,
  year,
  description,
  trailerURL,
  genres,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  console.log(trailerURL);
  return (
    <ListItemContainer
      id="ListItemContainer"
      index={index}
      isHovered={isHovered}
      // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgURL} alt="" />
      {isHovered && (
        <>
          <video src={`./${trailerURL}`} autoPlay={true} loop />
          <ItemInfo id="ItemInfo">
            <Icons id="Icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </Icons>
            <ItemInfoTop id="ItemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>{year}</span>
            </ItemInfoTop>
            <div className="desc">{description} </div>
            <div className="genre">{genres.join(", ")}</div>
          </ItemInfo>
        </>
      )}
    </ListItemContainer>
  );
};
