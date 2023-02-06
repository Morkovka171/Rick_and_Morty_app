import styled from "styled-components";
import "../fonts/index.css";

const Wrapper = styled.div`
position: relative;
  padding: 50px;
  background: #f0e7ff;
  font-family: "Nunito-Medium", sans-serif;
`;

const Container = styled.div`
  position: relative;
  padding: 135px 120px 120px 120px;
  background: #fff;
  border-radius: 15px;
  width: 80%;
  margin: 0 auto;
`;

const ScrollButton = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  bottom: 10%;
  right: 11.5%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform:scale(1.1);
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Wrapper, Container, ScrollButton};
