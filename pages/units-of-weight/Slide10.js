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

const image_1 = "assets/units-of-weight/slide10/1.svg";
const image_2 = "assets/units-of-weight/slide10/2.svg";

const Slide10 = ({ navBar, downIcon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalDismiss = () => {
    setIsModalOpen(false);
  };

  const modalContent = (
    <Flex direction="column">
      <Paragraph>
        The SI system is a decimal-based system because it is based on the
        multiples of ten. Any measurement given in one metric unit (for example,
        kilogram) can be converted to another metric unit (for example, gram)
        simply by moving the decimal place.
      </Paragraph>
      <ModalImg
        src={image_2}
        alt="Diagram that represents decimal based system and its relation."
      />
    </Flex>
  );

  return (
    <TextAndDiagramSlide
      bg="DARK"
      title={"International System of Units"}
      diagram={
        <TransitionImage
          images={[image_1]}
          altTexts={["Diagram that represents International system of units"]}
        />
      }
      navBar={navBar}
      downIcon={downIcon}
    >
      <Modal
        bg="LIGHT"
        color={colors.BLACK}
        title={"Decimal-Based System"}
        content={modalContent}
        isOpen={isModalOpen}
        onDismiss={onModalDismiss}
      />
      <Paragraph color={colors.WHITE}>
        The International System of Units or the SI system is a{" "}
        <ModalTriggerText
          color={colors.WHITE}
          onClick={() => setIsModalOpen(true)}
        >
          decimal-based system
        </ModalTriggerText>{" "}
        of measurement and has universal acceptance.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide10;
