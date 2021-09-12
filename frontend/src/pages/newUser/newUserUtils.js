import {
  NewUserGender,
  NewUserItem,
  NewUserSelect,
} from "./newUserSC";

const newUserItems = [
  { label: "Username", placeholder: "john" },
  { label: "Full Name", placeholder: "John Smith" },
  { label: "Email", placeholder: "john@gmail.com" },
  { label: "Password", placeholder: "password" },
  { label: "Phone", placeholder: "+1 123 456 78" },
  { label: "Address", placeholder: "New York | USA" },
  { label: "Gender" },
  { label: "Active" },
];

const newUserItemCompForGender = (
  <NewUserGender id="NewUserGender">
    <div>
      <input type="radio" name="gender" id="male" value="male" />
      <label for="male">Male</label>
    </div>
    <div>
      <input
        type="radio"
        name="gender"
        id="female"
        value="female"
      />
      <label for="female">Female</label>
    </div>
    <div>
      <input type="radio" name="gender" id="other" value="other" />
      <label for="other">Other</label>
    </div>
  </NewUserGender>
);

const newUserItemCompForActive = (
  <NewUserSelect
    id="NewUserSelect"
    className="newUserSelect"
    name="active"
    id="active"
  >
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </NewUserSelect>
);

export const renderNewUserItem = () => {
  return newUserItems.map(({ label, placeholder }, index) => (
    <NewUserItem id="NewUserItem">
      <label>{label}</label>
      {label === "Gender" ? (
        newUserItemCompForGender
      ) : label === "Active" ? (
        newUserItemCompForActive
      ) : (
        <input type="text" placeholder="john" />
      )}
    </NewUserItem>
  ));
};
