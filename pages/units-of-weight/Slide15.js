import { useState } from "react";
import { colors } from "utils/colors";
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
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);

const unitsOfWeight_full = "assets/units-of-weight/slide15/1.svg";

const Slide15 = ({ downIcon }) => {
  return (
    <TextAndDiagramSlide
      title="Units to Measure Mass"
      secondaryTitle="Imperial System"
      diagram={
        <TransitionImage
          images={[unitsOfWeight_full]}
          altTexts={[
            "Diagram that represents units to measure mass in Imperial system",
          ]}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph>
        The Imperial System includes grain, dram, stone, quarter, hundredweight
        and long ton as additional units to measure mass apart from ounce, pound
        and ton in the US system.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide15;
