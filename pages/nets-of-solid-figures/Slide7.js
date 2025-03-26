import useModal from "hooks/useModal";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const Flex = dynamic(() => import("components/StyledElements").then((mod) => mod.Flex));
const ModalImg = dynamic(() => import("components/StyledElements").then((mod) => mod.ModalImg));
const ModalTriggerText = dynamic(() => import("components/text").then((mod) => mod.ModalTriggerText));
const Modal = dynamic(() => import("components/layout/Modal"));
// import { Applet4505Ge } from "@assessed/byjus-us-math-applets/45_05_GE";
import { colors } from "utils/colors";
const slide_7_pop = "assets/nets-of-solid-figures/15.svg";

const Slide7 = ({ downIcon, currentPageIdx }) => {
  const modalContent = (
    <Flex direction="column" key={0}>
      <Paragraph color={colors.WHITE}>
        A triangular prism is a polyhedron made of three identical rectangular faces connecting two parallel and identical triangular faces.
      </Paragraph>
      <ModalImg src={slide_7_pop} alt="Image of a triangular prism" />
    </Flex>
  );
  const { isModalOpen, onClick, onDismiss } = useModal();
  return null;
};

export default Slide7;
