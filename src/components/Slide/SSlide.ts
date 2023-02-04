import styled from "styled-components";
import "../../fonts/index.css";
import SliderType from "../../types/SliderType";

const Wrapper = styled.div<{ bgImage: string }>`
  /* width: 100%; */
  height: 500px;
  border-radius: 20px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;
`;

const Content = styled.div<{ position: SliderType["position"], bg: string }>`
  position: absolute;
  top: ${(props) => props.position.top};
  bottom: ${(props) => props.position.bottom};
  left: ${(props) => props.position.left};
  right: ${(props) => props.position.right};
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content:center;
  text-align:center;
  font-size: 35px;
  font-family: "Nunito-ExtraBold", sans-serif;
  background-color: ${(props) => props.bg};
  border-radius: 30px;
  padding: 20px;
`;

const Text = styled.span<{ textColor: string }>`
  color: ${(props) => props.textColor};
`;
const AText = styled.a<{ aTextColor: string }>`
  color: ${(props) => props.aTextColor};
  cursor: pointer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Wrapper, Content, Text, AText };
