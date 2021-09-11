import { DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";

export const UserListContainer = styled.div`
  flex: 4;
`;

export const UserListUser = styled.div`
  display: flex;
  align-items: center;
`;

export const UserListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const UserListEditBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

export const UserListDeleteIcon = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;
