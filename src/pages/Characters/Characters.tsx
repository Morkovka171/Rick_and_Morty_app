import axios from 'axios';
import React from "react";
import ItemCard from "../../components/ItemCard";
import Filters from "../../components/Filters";
import { mockCharacters } from "../../helpers/mockCharacters";
import CharacterType from "../../types/CharactersTypes";
import SCharacters from "./SCharacters";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Characters = () => {
  const [characters, setCharacters] = React.useState<CharacterType[]>([]);
  const filter = useSelector((state: RootState) => state.filter.filter);
  
  React.useEffect(() => {
    let query = '';
    if (Object.keys(filter).length !== 0) {
      query = '/?';
      for (let f in filter) {
        if (filter[f]) {
          query += `${f}=${filter[f]}&`
        }
      }
    }
    axios
      .get(`https://rickandmortyapi.com/api/character${query.slice(0, -1)}`)
      .then((res) => {
        setCharacters(res.data.results);
        console.log(res)
      })
      .catch((error) => console.log(error));

  }, [filter]);

  return (
    <>
      <Filters />
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
