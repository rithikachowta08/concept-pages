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
const fullMap = "assets/units-of-weight/slide7/1.svg";
const americaMap = "assets/units-of-weight/slide7/2.svg";
const otherCountries = "assets/units-of-weight/slide7/3.svg";
const canadaAndAll = "assets/units-of-weight/slide7/4.svg";

const Slide7 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(parseInt(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="Measurement Systems"
      secondaryTitle="Standard Units"
      diagram={
        <TransitionImage
          images={[fullMap, americaMap, otherCountries, canadaAndAll]}
          altTexts={[
            "Diagram of world map",
            "Diagram of world map with countries that use united states customary system (USCS) highlighted.",
            "Diagram of world map with countries that use International system of units highlighted.",
            "Diagram of world map with countries that use imperial system highlighted.",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph>
        The standard systems used to measure mass across the globe are as
        follows:
      </Paragraph>
      <Paragraph>
        <TextLine>
          <TextSpanBg
            id={1}
            onHover={onHover}
            onHoverOut={onHoverOut}
            hoverColor={colors.DARK_LAVENDER}
          >
            United States Customary System (USCS)
          </TextSpanBg>
        </TextLine>
        <TextLine>
          <TextSpanBg
            id={2}
            onHover={onHover}
            onHoverOut={onHoverOut}
            hoverColor={colors.DARK_LAVENDER}
          >
            International System of Units
          </TextSpanBg>
        </TextLine>
        <TextLine>
          <TextSpanBg
            id={3}
            onHover={onHover}
            onHoverOut={onHoverOut}
            hoverColor={colors.DARK_LAVENDER}
          >
            Imperial System
          </TextSpanBg>
        </TextLine>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide7;
