import styled from "styled-components";
import "../fonts/index.css";

const Wrapper = styled.div`
  padding: 50px;
  background: #f0e7ff;
  font-family: "Nunito-Medium", sans-serif;
`;

const Container = styled.div`
  position: relative;
  padding: 135px 70px 70px 70px;
  background: #fff;
  border-radius: 15px;
  width: 80%;
  margin: 0 auto;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Wrapper, Container };
