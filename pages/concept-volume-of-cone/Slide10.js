import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const HyperLink = dynamic(() => import("components/text/HyperLink"));
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);

const Slide10 = ({ downIcon }) => {
  return (
    <TextAndAppletSlide
      downIcon={downIcon}
      bg="DARK"
      title=""
      appletSrc="./applets/triangle.html"
    >
      <Paragraph color={colors.WHITE}>
        Relation between volume of a cone and cylinder
      </Paragraph>
      <Paragraph color={colors.WHITE}>
        Reference 1: &nbsp;
        <HyperLink
          href="https://www.geogebra.org/m/pfn6znft"
          color={colors.DARK_BLUE}
        >
          https://www.geogebra.org/m/pfn6znft
        </HyperLink>{" "}
      </Paragraph>
      <Paragraph color={colors.WHITE}>
        Reference 2: &nbsp;
        <HyperLink
          href="https://www.geogebra.org/m/x54hJsVG"
          color={colors.DARK_BLUE}
        >
          https://www.geogebra.org/m/x54hJsVG
        </HyperLink>{" "}
      </Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide10;
