import {
  ArrowDropDown,
  Notifications,
  Search,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Left,
  NavbarContainer,
  NavbarInnerContainer,
  Options,
  Profile,
  Right,
} from "./navbarSC";
import { useIsScrolled } from "./navbarUtils";

export const Navbar = () => {
  const isScrolled = useIsScrolled();

  return (
    <NavbarContainer id="NavbarContainer" isScrolled={isScrolled}>
      <NavbarInnerContainer id="NavbarInnerContainer">
        <Left id="Left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="series" className="link">
            <span>Series</span>
          </Link>
          <Link to="movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </Left>
        <Right id="Right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <Profile id="Profile">
            <ArrowDropDown className="icon" />
            <Options id="Options">
              <span>Settings</span>
              <span>Logout</span>
            </Options>
          </Profile>
        </Right>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};
