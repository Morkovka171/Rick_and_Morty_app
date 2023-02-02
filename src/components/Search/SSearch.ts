import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  background: #faf6f6;
  border: none;
  border-bottom: 1px solid #f6d3ff;
  border-radius: 27px;
  outline: none;
  padding: 8px 15px;

  &::placeholder {
    color: #712097;
    font-size:17px;
  }
`;

const InputButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 9px;
  width: 30px;
  height: 30px;
  padding: 0;
  background-image: url("assets/search.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  border-radius: 50%;
  border: none;
  outline: 0;
  cursor: pointer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    InputWrapper,
    Input,
    InputButton,
  };
  