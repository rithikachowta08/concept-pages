import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);

const Slide6 = ({ downIcon }) => {
  return (
    <TextAndAppletSlide
      title="Total Surface Area of Cube"
      appletSrc="./applets/triangle.html"
      downIcon={downIcon}
    >
      <Paragraph>
        Find the total surface area of a cube with the side length of 6 units.
      </Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide6;
