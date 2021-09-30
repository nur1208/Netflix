import React, { useEffect, useState } from "react";
import { Featured } from "../../components/featured/Featured";
import { List } from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import { HomePageContainer } from "./homePageSC";
import { getRandomLists } from "./homePageUtils";

export const HomePage = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    getRandomLists(type, genre, setLists);
  }, [type, genre]);

  const featuredProp = { type, setGenre };

  return (
    <HomePageContainer>
      <Navbar />
      <Featured {...featuredProp} />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      {/* {lists.map((list) => (
      ))} */}
    </HomePageContainer>
  );
};
