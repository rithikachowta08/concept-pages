import { useState } from "react";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("components/layout/Modal"));
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const ModalTriggerText = dynamic(() => import("components/text").then((mod) => mod.ModalTriggerText));
const ModalImg = dynamic(() => import("components/StyledElements").then((mod) => mod.ModalImg));
const Flex = dynamic(() => import("components/StyledElements").then((mod) => mod.Flex));
// import { Applet02001Ge } from "@assessed/byjus-us-math-applets/020_01_GE";
const cone_unit = "assets/concept-volume-of-cone/slide2/1.svg";
const Slide2 = ({ downIcon, currentPageIdx }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContent = (
    <Flex direction="column">
      <Paragraph color="white" marginBottom="1vh" fontSize="1.5rem">
        A right-angled triangle is a triangle in which one of its interior angles equal to 90 degrees.
      </Paragraph>
      <ModalImg src={cone_unit} alignSelf="center" width="400px" marginBottom="50px" alt="Diagram of a right angle triangle" />
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

export default Slide2;
