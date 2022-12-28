import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const HyperLink = dynamic(() => import("components/text/HyperLink"));
const MathElement = dynamic(() => import("components/MathElement"));
const Pill = dynamic(() => import("components/Pill"));

const Slide7 = ({ downIcon }) => {
  let latex = [];
  latex.push(`\\times`);
  latex.push(`\\times`);

  let mathjaxCounter = 0;
  return (
    <TextAndAppletSlide
      secondaryTitle="Area of a Rhombus"
      title="Derivation"
      appletSrc="./applets/triangle.html"
      downIcon={downIcon}
    >
      <Paragraph>
        The area of rhombus will be equal to the{" "}
        <HyperLink
          href={
            "https://docs.google.com/presentation/d/1KOI1widIxq6Tgh6WFAwh8OC9zn7u-NWmlLmr88BBfB8/edit#slide=id.g19f0da22f33_0_274"
          }
          color={colors.YELLOW}
        >
          area of rectangle
        </HyperLink>
        .
      </Paragraph>
      <Paragraph>
        Area of a rectangle = Length{" "}
        <MathElement htmlString={latex[mathjaxCounter++]} /> Width
      </Paragraph>
      <Paragraph>
        Here, the length and width of the rectangle are the base and height of
        the rhombus.
      </Paragraph>
      <Pill  color={colors.WHITE}  bgColor={colors.GREEN}>
        Area of the rhombus = Base(b){" "}
        <MathElement htmlString={latex[mathjaxCounter++]} /> Height(h)
      </Pill>
    </TextAndAppletSlide>
  );
};

export default Slide7;
