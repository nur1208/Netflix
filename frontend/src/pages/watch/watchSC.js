import styled from "styled-components";

export const WatchContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .back {
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    cursor: pointer;
    z-index: 2;
  }

  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
