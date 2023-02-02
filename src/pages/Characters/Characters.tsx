// import axios from 'axios';
import React from "react";
import ItemCard from "../../components/ItemCard";
import Sort from "../../components/Sort";
import { mockCharacters } from "../../helpers/mockCharacters";
import CharacterType from "../../types/CharactersTypes";
import SCharacters from "./SCharacters";

const Characters = () => {
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
      <Sort />
      <SCharacters.Wrapper>
        {characters.map((character) => (
          <>
            <ItemCard key={character.id} {...character} />
          </>
        ))}
      </SCharacters.Wrapper>
    </>
  );
};

export default Characters;
