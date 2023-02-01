import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 70px;
  border-bottom: 1px solid #f6d3ff;
  padding: 20px 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.img`
  cursor: pointer;
  width: 90px;
  height: 90px;
  /* padding-right: 30px; */
`;

const Nav = styled.nav``;
const List = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
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

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  background: #faf6f6;
  border: none;
  border-bottom: 1px solid #f6d3ff;
  border-radius: 27px;
  outline: none;
  padding: 7px 12px;
  &::placeholder {
    color: #712097;
  }
`;

const InputButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
    width: 25px;
    height: 25px;
    padding: 0;
    background-image: url("assets/search.png");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    border-radius: 50%;
    border: none;
    outline: 0;
    cursor: pointer;
`

const Star = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Wrapper,
  Logo,
  Nav,
  List,
  ListItem,
  Input,
  Star,
  InputWrapper,
  InputButton,
};
