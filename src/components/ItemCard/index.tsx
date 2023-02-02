import React from "react";
import CharacterType from "../../types/CharactersTypes";
import SItemCard from "./SItemCard";

const ItemCard = (props: CharacterType) => {
  const {
    id,
    episode,
    gender,
    image,
    name,
    species,
    status,
    type,
    url,
    location,
    origin,
  } = props;

  return (
    <SItemCard.Wrapper>
      <SItemCard.Name>{name}</SItemCard.Name>
      <SItemCard.Img src={image} alt="character" />
      <SItemCard.WrapperContent>
        <span>Gender: {gender}</span>
        <span>Species: {species}</span>
        <SItemCard.Status status={status}>Status: {status}</SItemCard.Status>
        <span>Location: {location.name}</span>
        {type && <span>Type: {type}</span>}
      </SItemCard.WrapperContent>
    </SItemCard.Wrapper>
  );
};

export default ItemCard;
