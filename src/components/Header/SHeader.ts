import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #eee;
`;
const Logo = styled.img`
  width: 70px;
`;

const Nav = styled.nav``;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  list-style: none;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Wrapper, Logo, Nav, List, ListItem }