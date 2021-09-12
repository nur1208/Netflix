import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { ProductListContainer } from "./productListSC";
import { useProductList } from "./productListUtils";

export const ProductList = () => {
  // all the react hooks (useState, useEffect, ...) for ProductList
  // component inside useProductList custom hook
  const { data, columns } = useProductList();

  return (
    <ProductListContainer id="ProductListContainer">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </ProductListContainer>
  );
};
