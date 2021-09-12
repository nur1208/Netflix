import { AddProductItem } from "./newProductSC";

const addProductItems = [
  { label: "image", type: "file", id: "file" },
  { label: "Name", type: "text", placeholder: "Apple Airpods" },
  { label: "Stock", type: "text", placeholder: "123" },
  { label: "Active", id: "active", type: "select" },
];

export const renderAddProductItem = () => {
  return addProductItems.map(
    ({ label, type, placeholder, id }, index) => (
      <AddProductItem id="AddProductItem" key={index}>
        <label>{label}</label>
        {type === "select" ? (
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        ) : (
          <input type={type} id={id} placeholder={placeholder} />
        )}
      </AddProductItem>
    )
  );
};
