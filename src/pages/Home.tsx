// import axios from "axios";
import React from "react";
import { mockCharacters } from "../helpers/mockCharacters";
import CharacterType from "../types/CharactersTypes";

const Home = () => {
  const [characters, setCharacters] = React.useState<CharacterType[]>([]);

  React.useEffect(() => {
    // axios
    //   .get("https://rickandmortyapi.com/api/character")
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
    setCharacters(mockCharacters);
  }, []);

  return (
    <>
      {characters.map((obj) => (
        <div>{obj.name}</div>
      ))}
    </>
  );
};

export default Home;
