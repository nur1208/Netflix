import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  UserListContainer,
  UserListDeleteIcon,
  UserListEditBtn,
  UserListImg,
  UserListUser,
} from "./userListSC";
import { rows } from "./userListUtils";

export const UserList = () => {
  const [userRows, setUserRows] = useState(rows);

  const handleDelete = (id) => {
    const newUserRows = userRows.filter((row) => row.id !== id);
    setUserRows(newUserRows);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserListUser id="UserListUser">
            <UserListImg
              id="userListImg"
              src={params.row.avatar}
              alt={params.row.username}
            />
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <UserListEditBtn>Edit</UserListEditBtn>
            </Link>
            <UserListDeleteIcon
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={9}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListContainer>
  );
};
