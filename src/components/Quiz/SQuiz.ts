import styled from "styled-components";
import "../../fonts/index.css";

const Wrapper = styled.div`
  position: relative;
  width: 55%;
  height: auto;
  background: #faf6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 70px auto 30px auto;
  padding: 30px;
  font-family: "Nunito-SemiBold", sans-serif;

  &::after {
    content: "ТЕСТ";
    position: absolute;
    width: 97px;
    height: 27px;
    top: -13px;
    background: #f0e7ff;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 17px;
    color: #712097;
    font-family: "Nunito-ExtraBold", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Wrapper,
};
