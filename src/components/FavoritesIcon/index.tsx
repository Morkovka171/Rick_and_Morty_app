import React from "react";
import { Link, useLocation } from "react-router-dom";
import { favoriteRoute } from "../../helpers/routes";
import SFavoritesIcon from "./SFavoritesIcon";

const FavoritesIcon = () => {
  const currentUrl = useLocation().pathname;
  return (
    <Link to={favoriteRoute}>
      <SFavoritesIcon.Favorites
        src={`/assets/${
          favoriteRoute === currentUrl ? "favoriteActive" : "favorite"
        }.png`}
        alt="favorites"
      />
    </Link>
  );
};

export default FavoritesIcon;
