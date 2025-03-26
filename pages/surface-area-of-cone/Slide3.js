import { useState } from "react";
import dynamic from "next/dynamic";
import { coco_applet_uri } from "utils/constants";
// import { Applet02802Ge } from "@assessed/byjus-us-math-applets/028_02_GE";

const Modal = dynamic(() => import("components/layout/Modal"));
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const ModalTriggerText = dynamic(() => import("components/text").then((mod) => mod.ModalTriggerText));
const ModalImg = dynamic(() => import("components/StyledElements").then((mod) => mod.ModalImg));
const Flex = dynamic(() => import("components/StyledElements").then((mod) => mod.Flex));

const cube_unit = "assets/surface-area-of-cone/slide3/1.svg";
const Slide3 = ({ downIcon, currentPageIdx }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContent = (
    <Flex direction="column">
      <Paragraph color="white" marginBottom="1vh">
        A right triangle is a triangle in which one of its interior angles is equal to 90 degrees.
      </Paragraph>
      <ModalImg src={cube_unit} alignSelf="center" width="400px" marginBottom="50px" alt="Diagram of a right angle triangle" />
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
