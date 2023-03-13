import { useState } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const unitsOfWeight_full = "assets/units-of-weight/slide2/1.svg";

const Slide2 = ({ downIcon }) => {
  return (
    <TextAndDiagramSlide
      title="What is Weight Measurement?"
      diagram={
        <TransitionImage
          images={[unitsOfWeight_full]}
          altTexts={["Image of a balance"]}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph>
        Weight is measured to determine how heavy or light an object is.
        Generally, we use mass and weight interchangeably though they are
        different.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
