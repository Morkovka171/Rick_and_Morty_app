import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
`;

const Container = styled.div`

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Wrapper, Container };
