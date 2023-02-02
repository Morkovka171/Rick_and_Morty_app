import React from "react";
import { Link } from "react-router-dom";
import { mainRoute } from "../../helpers/routes";
import FavoritesIcon from "../FavoritesIcon";
import Navigation from "../Navigation";
import Search from "../Search";
import SHeader from "./SHeader";

const Header = () => {
  return (
    <SHeader.Wrapper>
      <Link to={mainRoute}>
        <SHeader.Logo src="/assets/logo.png" alt="logo" />
      </Link>
      <Navigation />
      <Search />
      <FavoritesIcon />
    </SHeader.Wrapper>
  );
};

export default Header;
