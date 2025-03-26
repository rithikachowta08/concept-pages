import useModal from "hooks/useModal";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const Flex = dynamic(() => import("components/StyledElements").then((mod) => mod.Flex));
const ModalImg = dynamic(() => import("components/StyledElements").then((mod) => mod.ModalImg));
const ModalTriggerText = dynamic(() => import("components/text").then((mod) => mod.ModalTriggerText));
const Modal = dynamic(() => import("components/layout/Modal"));
// import { Applet04506Ge } from "@assessed/byjus-us-math-applets/045_06_GE";
import { colors } from "utils/colors";
const slide_6_pop = "assets/nets-of-solid-figures/20.svg";

const Slide9 = ({ downIcon, currentPageIdx }) => {
  const modalContent = (
    <Flex direction="column" key={0}>
      <Paragraph color={colors.WHITE}>A triangular pyramid consists of a triangular base and 3 triangular faces.</Paragraph>
      <ModalImg src={slide_6_pop} alt="Image of a triangular pyramid" />
    </Flex>
  );
  const { isModalOpen, onClick, onDismiss } = useModal();
  return null;
};

export default Slide9;
