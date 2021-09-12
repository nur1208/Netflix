import React from "react";
import {
  NewUserButton,
  NewUserContainer,
  NewUserForm,
  NewUserTitle,
} from "./newUserSC";
import { renderNewUserItem } from "./newUserUtils";

export const NewUser = () => {
  return (
    <NewUserContainer id="NewUserContainer">
      <NewUserTitle id="NewUserTitle">New User</NewUserTitle>
      <NewUserForm id="NewUserForm">
        {renderNewUserItem()}
      </NewUserForm>
      <NewUserButton id="NewUserButton">Create</NewUserButton>
    </NewUserContainer>
  );
};
