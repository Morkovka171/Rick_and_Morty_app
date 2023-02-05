import styled from "styled-components";

const getStatusColor = (status: "Dead" | "Alive" | "unknown") => {
  switch (status) {
    case "Alive":
      return "#5fe04a";
    case "Dead":
      return "red";
    case "unknown":
      return "yellow";
    default:
      return "blue";
  }
};

const Wrapper = styled.div`
  padding: 5px 20px 20px 20px;
  background-color: #faf6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const Name = styled.span`
  position: relative;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #515236;
  font-weight: 700;
  font-size: 20px;

  &:after {
    content: "";
    position: absolute;
  }
`;

const Img = styled.img`
  border-radius: 10px;
  margin-bottom: 20px;
  width: 95%;
`;

const WrapperContent = styled.div`
  display: flex;
  line-height: 1.3;
  flex-direction: column;
  font-weight: 500;
  font-size: 17px;
  color: #515236;
  gap: 7px;
`;

const Status = styled.span<{ status: "Dead" | "Alive" | "unknown" }>`
  position: relative;
  width: fit-content;

  &:after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${(props) => getStatusColor(props.status)};
    border-radius: 50%;
    right: -16px;
    top: 5px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Wrapper,
  Name,
  Img,
  WrapperContent,
  Status,
};
