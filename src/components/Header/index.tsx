import React from "react";
import SHeader from "./SHeader";

const Header = () => {
  return (
    <SHeader.Wrapper>
      <SHeader.Logo src="/assets/science-fiction.png" alt="logo" />
      <SHeader.Nav>
        <SHeader.List>
          <SHeader.ListItem>Персонажи</SHeader.ListItem>
          <SHeader.ListItem>Локации</SHeader.ListItem>
          <SHeader.ListItem>Эпизоды</SHeader.ListItem>
        </SHeader.List>
      </SHeader.Nav>
    </SHeader.Wrapper>
  );
};

export default Header;
