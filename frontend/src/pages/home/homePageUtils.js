import axios from "axios";

export const getRandomLists = async (type, genre, setLists) => {
  try {
    const { data } = await axios.get(
      `lists${type ? "?type=" + type : ""}${
        genre ? "&genre=" + genre : ""
      }`,
      {
        headers: {
          token:
            "Bearer " +
            JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    setLists(data);
  } catch (err) {
    console.log(err);
  }
};
