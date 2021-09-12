import { Publish } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Chart } from "../../components/chart/Chart";
import {
  ProductAddBtn,
  ProductBottom,
  ProductButton,
  ProductContainer,
  ProductForm,
  ProductFormLeft,
  ProductFormRight,
  ProductInfoBottom,
  ProductInfoImg,
  ProductInfoTop,
  ProductName,
  ProductTitle,
  ProductTitleContainer,
  ProductTop,
  ProductTopLeft,
  ProductTopRight,
  ProductUpload,
  ProductUploadImg,
} from "./productSC";
import { chartProps, renderProductInfoItem } from "./productUtils";

export const Product = () => {
  return (
    <ProductContainer id="ProductContainer">
      <ProductTitleContainer id="ProductTitleContainer">
        <ProductTitle id="ProductTitle">Product</ProductTitle>
        <Link to="/newProduct">
          <ProductAddBtn id="ProductAddBtn">Create</ProductAddBtn>
        </Link>
      </ProductTitleContainer>
      <ProductTop id="ProductTop">
        <ProductTopLeft id="ProductTopLeft">
          <Chart {...chartProps} />
        </ProductTopLeft>
        <ProductTopRight id="ProductTopRight">
          <ProductInfoTop id="ProductInfoTop">
            <ProductInfoImg
              id="ProductInfoImg"
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="ProductInfoImg"
            />
            <ProductName id="ProductName">
              Apple Airpods
            </ProductName>
          </ProductInfoTop>
          <ProductInfoBottom id="ProductInfoBottom">
            {renderProductInfoItem()}
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom id="ProductBottom">
        <ProductForm id="ProductForm">
          <ProductFormLeft id="ProductFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </ProductFormLeft>
          <ProductFormRight id="ProductFormRight">
            <ProductUpload id="ProductUpload">
              <ProductUploadImg
                id="ProductUploadImg"
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />{" "}
              <label for="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </ProductUpload>
            <ProductButton id="ProductButton">
              Update
            </ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </ProductContainer>
  );
};
