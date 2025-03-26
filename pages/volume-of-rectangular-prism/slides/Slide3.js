import dynamic from "next/dynamic";
import { ModalTriggerText, Paragraph } from "components/text";
import { colors } from "utils/colors";
import { useState } from "react";
import { Flex, ModalImg } from "components/StyledElements";
const Modal = dynamic(() => import("components/layout/Modal"));
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
// import { Applet00401Ge } from "@assessed/byjus-us-math-applets/004_01_GE";

const image_popup = "assets/volume-of-rectangular-prism/slide_3_popup.svg";

const Slide3 = ({ downIcon, currentPageIdx }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContent = (
    <Flex direction="column">
      <Paragraph>A unit cube is a cube whose each side is 1 unit long.</Paragraph>
      <ModalImg src={image_popup} alt="Diagram of a unit cube" />
    </Flex>
  );

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };

  return null;
};

export default Slide3;
