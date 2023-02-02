import styled from "styled-components";

const Nav = styled.nav``;
const List = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  & > a {
    text-decoration: none;
  }
`;
const ListItem = styled.li<{ active?: boolean }>`
  font-family: Nunito-SemiBold, sans-serif;
  list-style: none;
  font-size: 17px;
  color: #712097;
  background: ${(props) => (props.active ? "#F0E7FF" : "#faf6f6")};
  border-radius: 30px;
  padding: 6px 23px;
  cursor: pointer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Nav,
  List,
  ListItem,
};
