import React from "react";
import SSlide from "./SSlide";

const Slide = ({
  bgImage,
  text,
  aText,
  aHref,
  textColor,
  aTextColor,
  bg,
  position,
}: any) => {
  return (
    <SSlide.Wrapper bgImage={bgImage}>
      <SSlide.Content bg={bg} position={position}>
        <SSlide.Text textColor={textColor}>{text}</SSlide.Text>
        <SSlide.AText aTextColor={aTextColor} href={aHref}>{aText}</SSlide.AText>
      </SSlide.Content>
    </SSlide.Wrapper>
  );
};

export default Slide;
