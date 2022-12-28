import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);

const Slide9 = ({ downIcon }) => {
  return (
    <TextAndAppletSlide
      title=""
      appletSrc="./applets/triangle.html"
      downIcon={downIcon}
    >
      <Paragraph>Applet description here</Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide9;
