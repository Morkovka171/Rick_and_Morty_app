import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #f6d3ff;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px 70px 30px 70px;
`;

const Text = styled.span`
  font-size: 17px;
  color: #712097;
  font-family: "Nunito-SemiBold", sans-serif;
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Wrapper,
  Text,
};
