import React from "react";
import SSearch from "./SSearch";

const Search = () => {
  return (
    <SSearch.InputWrapper>
      <SSearch.Input type="text" placeholder="Search..." />
      <SSearch.InputButton />
    </SSearch.InputWrapper>
  );
};

export default Search;
