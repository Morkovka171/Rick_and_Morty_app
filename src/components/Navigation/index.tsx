import React from "react";
import SNavigation from "./SNavigation";
import routes, { favoriteRoute } from "../../helpers/routes";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {

  const currentUrl = useLocation().pathname;

  return (
    <SNavigation.Nav>
      <SNavigation.List>
        {routes
          .filter((route) => route.url !== favoriteRoute)
          .map((route) => (
            <Link to={route.url}>
              <SNavigation.ListItem active={route.url === currentUrl}>{route.name}</SNavigation.ListItem>
            </Link>
          ))}
      </SNavigation.List>
    </SNavigation.Nav>
  );
};

export default Navigation;
