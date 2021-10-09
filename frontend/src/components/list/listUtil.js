import axios from "axios";
import { ListItem } from "../listItem/ListItem";
import { Link } from "react-router-dom";

const listItem = Array(10).fill(0);
export const renderListItem = (movies, copied) => {
  return movies.map((item, index) => (
    <Link
      to={`/watch/:`}
      key={copied ? index + movies.length : index}
    >
      <ListItem
        index={copied ? index + movies.length : index}
        {...item}
      />
    </Link>
  ));
};
