import React from "react";
import { Featured } from "../../components/featured/Featured";
import { List } from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import { HomePageContainer } from "./homePageSC";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
    </HomePageContainer>
  );
};
