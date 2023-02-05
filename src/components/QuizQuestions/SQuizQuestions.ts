import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #712097;
  gap: 30px;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 25px;
  font-family: "Nunito-ExtraBold", sans-serif;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 400px;
  width: 100%;
`;

const Answer = styled.span`
  display: flex;
  font-size: 20px;
  font-family: "Nunito-SemiBold", sans-serif;
  align-items: center;
  background-color: #f0e7ff;
  border-radius: 10px;
  padding: 15px 20px;
  cursor: pointer;
  flex: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #d6ffa3;
    color: #1b9a06;
  }
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
export default { Wrapper, Title, Content, Answer, Button };
