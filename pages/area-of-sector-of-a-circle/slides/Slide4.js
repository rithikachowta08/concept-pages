import dynamic from "next/dynamic";
const Modal = dynamic(() => import("components/layout/Modal"));
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
import { Flex, ModalImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/3 .svg";
const image_2 = "assets/area-of-sector-of-a-circle/17.svg";
const image_3 = "assets/area-of-sector-of-a-circle/16_pop up.svg";

const Slide4 = ({ navBar, downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalDismiss = () => {
    setIsModalOpen(false);
  };

  const modalContent = (
    <Flex direction="column">
      <Paragraph>
        Two points on the circumference of a circle divide the circle into arcs.
      </Paragraph>
      <ModalImg
        src={image_3}
        alt="Diagram of circles showing different types of arc of a circle i e,  Major arc, Minor arc and Semicircular arc"
      />
    </Flex>
  );

  return (
    <TextAndDiagramSlide
      bg="DARK"
      title={"Area of a Sector of a Circle"}
      diagram={
        <TransitionImage
          images={[image_1, image_2]}
          altTexts={[
            "Diagram of a circle showing enclosed area between arc and radius",
            "Diagram  of a circle highlighting the area of the sector",
          ]}
          activeIndex={activeIndex}
        />
      }
      navBar={navBar}
      downIcon={downIcon}
    >
      <Modal
        bg="LIGHT"
        color={colors.BLACK}
        title={"Arc of a circle"}
        content={modalContent}
        isOpen={isModalOpen}
        onDismiss={onModalDismiss}
      />
      <Paragraph color={colors.WHITE}>
        The region enclosed between two radii and an{" "}
        <ModalTriggerText
          color={colors.WHITE}
          onClick={() => setIsModalOpen(true)}
        >
          arc
        </ModalTriggerText>{" "}
        of a circle is known as the{" "}
        <TextSpanBg
          hoverColor={colors.LAVENDER}
          onHover={() => setActiveIndex(1)}
          onHoverOut={() => setActiveIndex(0)}
        >
          area of the sector
        </TextSpanBg>
        .
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide4;
