import styled, { createGlobalStyle } from "styled-components";

export const MainColor = "#0b0b0b";

export const GlobalStyle = createGlobalStyle`
a{
  text-decoration: none;
}

`;
export const Container = styled.div`
  ${({ isForAdmin }) =>
    isForAdmin &&
    `
  display: flex;
  margin-top: 10px;
  
  `}
`;
