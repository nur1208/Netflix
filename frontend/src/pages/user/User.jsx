import React from "react";
import { Link } from "react-router-dom";
import {
  UserAddButton,
  UserContainer,
  UserInnerContainer,
  UserShow,
  UserShowBottom,
  UserShowImg,
  UserShowTitle,
  UserShowTop,
  UserShowTopTitle,
  UserShowUsername,
  UserShowUserTitle,
  UserTitle,
  UserTitleContainer,
  UserUpdate,
  UserUpdateBtn,
  UserUpdateForm,
  UserUpdateIcon,
  UserUpdateImg,
  UserUpdateLeft,
  UserUpdateRight,
  UserUpdateTitle,
  UserUpdateUpload,
} from "./userSc";
import {
  accountDetailsInfo,
  contactDetailsInfo,
  renderUserShowInfo,
  renderUserUpdateItem,
} from "./userUtils";

export const User = () => {
  return (
    <UserContainer id="UserContainer">
      <UserTitleContainer id="UserTitleContainer">
        <UserTitle id="UserTitle">Edit User</UserTitle>
        <Link to="/admin/newUser">
          <UserAddButton id="UserAddButton">Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserInnerContainer id="UserInnerContainer">
        <UserShow id="UserShow">
          <UserShowTop id="UserShowTop">
            <UserShowImg
              id="UserShowImg"
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <UserShowTopTitle id="UserShowTopTitle">
              <UserShowUsername id="UserShowUsername">
                Anna Becker
              </UserShowUsername>
              <UserShowUserTitle id="UserShowUserTitle">
                Software Engineer
              </UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom id="UserShowBottom">
            <UserShowTitle id="UserShowTitle">
              Account Details
            </UserShowTitle>
            {renderUserShowInfo(accountDetailsInfo)}
            <UserShowTitle id="UserShowTitle">
              Contact Details
            </UserShowTitle>
            {renderUserShowInfo(contactDetailsInfo)}
          </UserShowBottom>
        </UserShow>
        <UserUpdate id="UserUpdate">
          <UserUpdateTitle id="UserUpdateTitle">
            Edit
          </UserUpdateTitle>
          <UserUpdateForm id="UserUpdateForm">
            <UserUpdateLeft id="UserUpdateLeft">
              {renderUserUpdateItem()}
            </UserUpdateLeft>
            <UserUpdateRight id="UserUpdateLeft">
              <UserUpdateUpload id="UserUpdateUpload">
                <UserUpdateImg
                  id="UserUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <UserUpdateIcon id="UserUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </UserUpdateUpload>
              <UserUpdateBtn id="UserUpdateBtn">
                Update
              </UserUpdateBtn>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserInnerContainer>
    </UserContainer>
  );
};
