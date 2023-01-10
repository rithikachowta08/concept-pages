import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);

const Slide4 = ({ downIcon }) => {
  return (
    <TextAndAppletSlide
      title="Nets of a Cube"
      appletSrc="./applets/triangle.html"
      downIcon={downIcon}
    >
      <Paragraph>Let’s visualize the cube using nets.</Paragraph>
      <br />
      <Paragraph>Step 1: Select a net from the options.</Paragraph>
      <Paragraph>
        Step 2: Move the slider to visualize the formation of a cube.
      </Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide4;
