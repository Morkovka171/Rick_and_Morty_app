import styled from "styled-components";

const Wrapper = styled.div`
  width: 75%;
  position: relative;
  margin: 25px auto;
  border-radius: 20px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  height: 35px;
  width: 35px;
  border: 0;
  outline: 0;
  z-index: 2;
  background-color: unset;
  background-image: url("assets/fast-forward.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    height: 40px;
    width: 40px;
  }
`;

const PrevButton = styled(Button)`
  left: -60px;
  transform: translateY(-50%) rotate(180deg);
  &:hover {
    left: -70px;
  }
`;

const NextButton = styled(Button)`
  right: -60px;
  transform: translateY(-50%);
  &:hover {
    right: -70px;
  }
`;

const NavigationWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Navigation = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#C67BEA" : "#f0e7ff")};
  border: none;
  height: 21px;
  width: 21px;
  border-radius: 20px;
  cursor: pointer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Wrapper,
  PrevButton,
  NextButton,
  NavigationWrapper,
  Navigation,
};
