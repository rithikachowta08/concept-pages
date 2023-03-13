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
import { TextLine } from "components/text";
const plain = "assets/units-of-weight/slide12/1.svg";
const sides_shaded = "assets/units-of-weight/slide12/2.svg";
const all_sides_shaded = "assets/units-of-weight/slide12/3.svg";

const Slide12 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(parseInt(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="Units to Measure Mass"
      secondaryTitle="International System of Units"
      diagram={
        <TransitionImage
          images={[plain, sides_shaded, all_sides_shaded]}
          altTexts={[
            "Diagram that represents units to measure mass",
            "Diagram that represents units to measure mass with highlighted units that are multiples of gram",
            "Diagram that represents units to measure mass with highlighted units that are subdivisions of gram",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph>
        Mass is measured using the SI unit called kilogram (kg). In the SI
        system, designations of{" "}
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          hoverColor={colors.DARK_LAVENDER}
        >
          multiples
        </TextSpanBg>{" "}
        or{" "}
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          hoverColor={colors.DARK_LAVENDER}
        >
          subdivisions
        </TextSpanBg>{" "}
        of mass are determined by combining “gram” with the metric number
        prefixes.
      </Paragraph>
      .
    </TextAndDiagramSlide>
  );
};

export default Slide12;
