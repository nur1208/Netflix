import { Publish } from "@material-ui/icons";
import styled from "styled-components";

export const UserContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserTitle = styled.h1``;

export const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

export const UserInnerContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

export const UserShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const UserShowUsername = styled.span`
  font-weight: 600;
`;

export const UserShowUserTitle = styled.span`
  font-weight: 300;
`;

//
export const UserShowBottom = styled.div`
  margin-top: 20px;
`;

export const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;

  .userShowIcon {
    font-size: 16px !important;
  }
`;

export const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;

export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

export const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UserUpdateLeft = styled.div``;

export const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & > label {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const UserUpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;

export const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

export const UserUpdateIcon = styled(Publish)`
  cursor: pointer;
`;

export const UserUpdateBtn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
