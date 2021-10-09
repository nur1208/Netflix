import React, { Fragment, useEffect, useState } from "react";
import { Featured } from "../../components/featured/Featured";
import { List } from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import { HomePageContainer } from "./homePageSC";
import { getMovies, getRandomLists } from "./homePageUtils";

export const HomePage = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRandomLists(type, genre, setLists);
  }, [type, genre]);

  const featuredProp = { type, setGenre };

  useEffect(() => {
    (async () => {
      const data = await getMovies();
      setMovies(data);
    })();
  }, []);

  const listArray = Array(3).fill(0);
  return (
    <HomePageContainer>
      <Navbar />
      <Featured {...featuredProp} />
      {listArray.map((_, index) => (
        <Fragment key={index}>
          <List movies={movies.slice(0, 5)} />
          <List movies={movies.slice(5)} />
        </Fragment>
      ))}

      {/* {lists.map((list) => (
      ))} */}
    </HomePageContainer>
  );
};
