import React from "react";
import SHeader from "./SHeader";

const Header = () => {
  return (
    <SHeader.Wrapper>
      <SHeader.Logo src="/assets/logo.png" alt="logo" />
      <SHeader.Nav>
        <SHeader.List>
          <SHeader.ListItem active>Main</SHeader.ListItem>
          <SHeader.ListItem>Characters</SHeader.ListItem>
          <SHeader.ListItem>Location</SHeader.ListItem>
          <SHeader.ListItem>Episode</SHeader.ListItem>
        </SHeader.List>
      </SHeader.Nav>
      <SHeader.InputWrapper>
        <SHeader.Input type="text" placeholder="Search..." />
        <SHeader.InputButton />
      </SHeader.InputWrapper>
      <SHeader.Star src="/assets/love.png" alt="favorites" />
    </SHeader.Wrapper>
  );
};

export default Header;
