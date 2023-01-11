import { useState } from "react";
import { lineHeightProp } from "utils/fontStyles";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);

const Slide7 = ({ downIcon }) => {
  return (
    <TextAndAppletSlide
      downIcon={downIcon}
      title=""
      appletSrc="./applets/triangle.html"
    >
      <Paragraph lineHeight={lineHeightProp}>Real Life Example</Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide7;
