import {
  ProductInfoItem,
  ProductInfoKey,
  ProductInfoValue,
} from "./productSC";

export const productData = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 5000,
  },
];

export const chartProps = {
  data: productData,
  dataKey: "Sales",
  title: "Sales Performance",
};

const productInfoItems = [
  { key: "id", value: "123" },
  { key: "sales", value: "5123" },
  { key: "active", value: "yes" },
  { key: "in stock", value: "no" },
];

export const renderProductInfoItem = () => {
  return productInfoItems.map(({ key, value }, index) => (
    <ProductInfoItem id="ProductInfoItem">
      <ProductInfoKey id="ProductInfoKey">{key}:</ProductInfoKey>
      <ProductInfoValue id="ProductInfoValue">
        {value}
      </ProductInfoValue>
    </ProductInfoItem>
  ));
};
