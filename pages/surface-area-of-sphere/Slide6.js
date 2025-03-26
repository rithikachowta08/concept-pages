import { useState } from "react";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Modal = dynamic(() => import("components/layout/Modal"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const Flex = dynamic(() => import("components/StyledElements").then((mod) => mod.Flex));
const ModalImg = dynamic(() => import("components/StyledElements").then((mod) => mod.ModalImg));
import { ModalTriggerText, TextLine } from "components/text";
const cylinder = "assets/surface-area-of-sphere/cylinder.svg";
import { colors } from "utils/colors";
// import { Applet01101Ge } from "@assessed/byjus-us-math-applets/011_01_GE";

const Slide6 = ({ downIcon, currentPageIdx }) => {
  const modalContent = (
    <Flex direction="column">
      <Paragraph>The curved surface area (CSA) of a cylinder is the area covered by its curved surface.</Paragraph>
      <Paragraph>
        <TextLine>CSA = 2 &times; π &times; r &times; h </TextLine>
      </Paragraph>
      <ModalImg src={cylinder} alt="Diagram of a curved surface area of a cylinder" />
    </Flex>
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };
  return null;
};

export default Slide6;
