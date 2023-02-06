import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid #f6d3ff;
  padding: 25px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  cursor: pointer;
  width: 90px;
  height: 90px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Wrapper,
  Logo,
};
