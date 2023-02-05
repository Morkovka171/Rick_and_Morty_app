import styled from "styled-components";

const PreviewContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Img = styled.img`
  width: 95%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  margin: 15px 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 27px;
  font-family: "Nunito-ExtraBold", sans-serif;
  color: #712097;
  text-align: center;
`;

const Text = styled.div`
  width: 70%;
  text-align: center;
  font-size: 20px;
  line-height: 27px;
  color: #c67bea;
`;

const Button = styled.button`
  padding: 17px 30px;
  background-color: #f0e7ff;
  border-radius: 30px;
  border: none;
  font-size: 17px;
  font-family: "Nunito-ExtraBold", sans-serif;
  color: #712097;
  cursor: pointer;
  margin-bottom: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #D6FFA3;
    color: #1B9A06;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Img,
  PreviewContent,
  Title,
  Text,
  Button,
};
