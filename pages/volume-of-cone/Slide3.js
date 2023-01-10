import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { lineHeightProp } from "utils/fontStyles";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const Slide3 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndAppletSlide
      downIcon={downIcon}
      title="Formation of a Cone"
      appletSrc={`${coco_applet_uri}surface-area-of-cone-formation-v3/index.html`}
      currentPageIdx={currentPageIdx}
    >
      <Paragraph lineHeight={lineHeightProp}>
        A cone is a three dimensional shape that narrows smoothly from a &nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          circular base
        </TextSpanBg>
        &nbsp;to a point called the&nbsp;
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          apex or vertex
        </TextSpanBg>
        .
      </Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide3;
