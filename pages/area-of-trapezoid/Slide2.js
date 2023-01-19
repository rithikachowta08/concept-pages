import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { Flex, ModalImg } from "components/StyledElements";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const ModalTriggerText = dynamic(() =>
  import("components/text").then((mod) => mod.ModalTriggerText)
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);

const MathElement = dynamic(() => 
  import("components/MathElement")
)

const slide2_a = "assets/area-of-trapezoid/slide2_a.svg";
const slide2_b = "assets/area-of-trapezoid/slide2_b.svg";
const slide2_pop_up= "assets/area-of-trapezoid/slide2_pop_up.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide2 = ({ downIcon, navBar }) => {
  const modalContent = (
    <Flex direction="column">
       <Paragraph color={colors.WHITE}>
       A trapezoid is a quadrilateral with exactly one pair of parallel sides.
       </Paragraph>
       <ModalImg src={slide2_pop_up} alt="Diagram of a trapezoid with given parallel bases"/>
    </Flex>
 );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
 };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };
  return (
    <TextAndDiagramSlide
      title="What is the area of a trapezoid?"
      diagram={
        <TransitionImage
          images={[slide2_a, slide2_b]}
          altTexts={[
            "Diagram of a trapezoid with given parallel bases",
            "Diagram of a trapezoid with region enclosed"
         ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      navBar={navBar}
    >
      <Modal
            isOpen={isModalOpen}
            title="What is a trapezoid?"
            content={modalContent}
            onDismiss={onDismiss}
         />
      <Paragraph lineHeight={lineHeightProp}>
      The area of a&nbsp;
      <ModalTriggerText onClick={onClick}>trapezoid</ModalTriggerText>&nbsp;
      is the&nbsp;
        <TextSpanBg
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          hoverColor={colors.DARK_LAVENDER}
        >
          region enclosed
        </TextSpanBg>
        &nbsp;within its four sides.
        </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
