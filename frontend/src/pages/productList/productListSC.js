import { DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";

export const ProductListContainer = styled.div`
  padding: 20px;
  flex: 4;
`;

export const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

export const ProductListDelete = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;
