import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  & > span {
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  .sliderArrow {
    width: 50px;
    height: 100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
  .container {
    margin-left: 50px;
    display: flex;
    margin-top: 10px;
    width: max-content;
    transform: translateX(0px);
    transition: all 1s ease;
  }
`;
