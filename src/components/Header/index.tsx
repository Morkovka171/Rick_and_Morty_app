import React from "react";
import { Link, useLocation } from "react-router-dom";
import { mainRoute } from "../../helpers/routes";
import FavoritesIcon from "../FavoritesIcon";
import Navigation from "../Navigation";
import Search from "../Search";
import SHeader from "./SHeader";

const Header = () => {
  const currentUrl = useLocation().pathname;
  return (
    <SHeader.Wrapper>
      <Link to={mainRoute}>
        <SHeader.Logo src="/assets/logo.png" alt="logo" />
      </Link>
      <Navigation />
      {currentUrl !== mainRoute && <Search />}
      <FavoritesIcon />
    </SHeader.Wrapper>
  );
};

export default Header;
