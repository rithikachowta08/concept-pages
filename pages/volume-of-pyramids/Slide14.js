import { lineHeightProp } from "utils/fontStyles";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { coco_applet_uri } from "utils/constants";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const MathElement = dynamic(() => import("components/MathElement"));
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Flex)
);
const Pill = dynamic(() => import("components/Pill"));

const Slide14 = ({ downIcon, currentPageIdx }) => {
  let latex = [];
  latex.push(`\\dfrac{1}{3}`);
  latex.push(`\\dfrac{1}{3}`);
  let mathjaxCounter = 0;
  return (
    <TextAndAppletSlide
      downIcon={downIcon}
      title="Relationship between volume of a pyramid and prism"
      bg="DARK"
      appletSrc={`${coco_applet_uri}volume-of-pyramids-formation-v3/index.html`}
      currentPageIdx={currentPageIdx}
    >
      <Paragraph color={colors.WHITE}>
        If the base area and height of a prism and pyramid are the same, we
        know:
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        <Flex direction="row">
          <Paragraph color={colors.WHITE}>Volume of a prism</Paragraph>
          <Paragraph color={colors.WHITE}>=</Paragraph>
          <Paragraph color={colors.WHITE}>Base area (A) × Height (h)</Paragraph>
        </Flex>
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        <Flex direction="row">
          <Paragraph color={colors.WHITE}>Volume of a pyramid</Paragraph>
          <Paragraph color={colors.WHITE}>=</Paragraph>
          <Paragraph color={colors.WHITE}>
            {" "}
            <MathElement htmlString={latex[mathjaxCounter++]} /> × Base area (A)
            × Height (h)
          </Paragraph>
        </Flex>
      </Paragraph>

      <Paragraph color={colors.WHITE}>Hence;</Paragraph>
      <div>
        <Paragraph>
          <Pill>
            Volume of a pyramid =
            <MathElement htmlString={latex[mathjaxCounter++]} /> × Volume of a
            prism
          </Pill>
        </Paragraph>
      </div>
    </TextAndAppletSlide>
  );
};

export default Slide14;
