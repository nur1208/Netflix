import styled from "styled-components";
import { MainColor } from "../../appSC";

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  .desc {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .genre {
    font-size: 14px;
    color: lightgray;
  }
`;

export const Icons = styled.div`
  display: flex;
  margin-bottom: 10px;

  .icon {
    border: 2px solid white;
    padding: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const ItemInfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;
  color: gray;

  & > span {
    font-size: 18px;
  }

  .limit {
    border: 1px solid gray;
    padding: 1px 3px;
    margin: 0 10px;
  }
`;
export const ListItemContainer = styled.div`
width: 225px;
  height: 125px;
  background-color: ${MainColor};
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;

  left: ${({ isHovered, index }) =>
    isHovered && `${index * 225 - 50 + index * 2.5}px`};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

    &:hover {
    width: 325px;
    height: 320px;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    border-radius: 5px;

    img {
      height: 140px;
    }

`;
