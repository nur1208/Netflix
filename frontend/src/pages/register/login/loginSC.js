import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("http://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg");
  background-size: cover;
  position: relative;

  .top {
    .wrapper {
      padding: 20px 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        height: 40px;
      }
    }
  }

  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    form {
      width: 300px;
      height: 300px;
      padding: 30px;
      border-radius: 5px;
      background-color: var(--main-color);
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      input {
        height: 40px;
        border-radius: 5px;
        background-color: gray;
        color: white;
        padding-left: 10px;

        &::placeholder {
          color: lightgray;
        }
      }

      button {
        height: 40px;
        border-radius: 5px;
        background-color: red;
        color: white;
        border: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
      }

      span {
        color: lightgray;
        b {
          color: white;
        }
      }
    }
  }
`;
