import styled from "styled-components";

export const NewProductContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const AddProductTitle = styled.h1``;

export const AddProductForm = styled.form`
  margin-top: 10px;
`;

export const AddProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }

  & > input {
    padding: 10px;
  }

  & > select {
    padding: 10px;
  }
`;

export const AddProductButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
