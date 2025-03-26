import useModal from "hooks/useModal";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const Flex = dynamic(() => import("components/StyledElements").then((mod) => mod.Flex));
const ModalImg = dynamic(() => import("components/StyledElements").then((mod) => mod.ModalImg));
const ModalTriggerText = dynamic(() => import("components/text").then((mod) => mod.ModalTriggerText));
const Modal = dynamic(() => import("components/layout/Modal"));
// import { Applet04503Ge } from "@assessed/byjus-us-math-applets/045_03_GE";
import { colors } from "utils/colors";
const slide_5_pop = "assets/nets-of-solid-figures/11.svg";

const Slide5 = ({ downIcon, currentPageIdx }) => {
  const modalContent = (
    <Flex direction="column" key={0}>
      <Paragraph color={colors.WHITE}>A cube is a three-dimensional shape that has 6 square faces, 8 vertices, and 12 edges of equal length.</Paragraph>
      <ModalImg src={slide_5_pop} alt="image of a cube" />
    </Flex>
  );
  const { isModalOpen, onClick, onDismiss } = useModal();
  return null;
};

export default Slide5;
