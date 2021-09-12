import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductListDelete,
  ProductListEdit,
  ProductListImg,
  ProductListItem,
} from "./productListSC";

const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 10,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
];

export const useProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem id="productListItem">
            <ProductListImg
              id="productListImg"
              src={params.row.img}
              alt={params.row.name}
            />
            {params.row.name}
          </ProductListItem>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <ProductListEdit id="productListEdit">
                Edit
              </ProductListEdit>
            </Link>
            <ProductListDelete
              id="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return { data, columns };
};
