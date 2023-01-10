import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);

const Slide8 = ({ downIcon }) => {
  return (
    <TextAndAppletSlide
      title="Surface Area of Cube"
      appletSrc="./applets/triangle.html"
      downIcon={downIcon}
    >
      <Paragraph>
        Find the lateral surface area of a cube with the side length of 6 units.
      </Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide8;
