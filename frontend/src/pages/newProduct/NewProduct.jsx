import React from "react";
import {
  AddProductButton,
  AddProductForm,
  AddProductTitle,
  NewProductContainer,
} from "./newProductSC";
import { renderAddProductItem } from "./newProductUtils";

export const NewProduct = () => {
  return (
    <NewProductContainer id="NewProductContainer">
      <AddProductTitle id="AddProductTitle">
        New Product
      </AddProductTitle>
      <AddProductForm id="AddProductForm">
        {renderAddProductItem()}
      </AddProductForm>
      <AddProductButton id="AddProductButton">
        Create
      </AddProductButton>
    </NewProductContainer>
  );
};
