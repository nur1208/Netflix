import styled from "styled-components";

export const NewUserContainer = styled.div`
  padding: 20px;
  flex: 4;
`;

export const NewUserTitle = styled.h1``;

export const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;

  & > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }

  & > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

export const NewUserGender = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  input {
    margin-top: 15px;
    margin-left: 15px;
  }

  label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;

export const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`;

export const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;