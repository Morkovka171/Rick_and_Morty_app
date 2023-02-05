import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #712097;
  gap: 20px;
`;

const Title = styled.h4`
  font-family: "Nunito-ExtraBold", sans-serif;
  font-size: 35px;
  margin: 0;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 20px;
`;

const Text = styled.p`
  text-align: center;
  width: 85%;
  font-size: 20px;
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
    background-color: #d6ffa3;
    color: #1b9a06;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Wrapper, Image, Title, Text, Button };
