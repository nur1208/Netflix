import styled from "styled-components";
import { MainColor } from "../../appSC";

export const FeaturedContainer = styled.div`
  height: 90vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Category = styled.div`
  position: absolute;
  top: 80px;
  left: 50px;
  font-size: 30px;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;

  select {
    cursor: pointer;
    background-color: ${MainColor};
    border: 1px solid white;
    color: white;
    margin-left: 20px;
    padding: 5px;
  }
`;

export const Info = styled.div`
  width: 35%;
  position: absolute;
  left: 50px;
  bottom: 100px;
  color: white;
  display: flex;
  flex-direction: column;

  img {
    width: 400px;
  }

  span.desc {
    margin: 20px 0px;
  }
`;

export const Buttons = styled.div`
  display: flex;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;

    &.play {
      background-color: white;
      color: ${MainColor};
    }

    &.more {
      background-color: gray;
      color: white;
    }

    span {
      margin-left: 5px;
    }
  }
`;
