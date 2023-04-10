import useModal from "hooks/useModal";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Modal = dynamic(() => import("components/layout/Modal"));
import { Applet00801Ge } from "@assessed/byjus-us-math-applets/008_01_GE";
import { colors } from "utils/colors";
const slide_6_pop = "assets/nets-of-solid-figures/20.svg";

const Slide9 = ({ downIcon, currentPageIdx }) => {
   const modalContent = (
      <Flex direction="column" key={0}>
         <Paragraph color={colors.WHITE}>
            A triangular pyramid consists of a triangular base and 3 triangular
            faces.
         </Paragraph>
         <ModalImg src={slide_6_pop} alt="Image of a triangular pyramid" />
      </Flex>
   );
   const { isModalOpen, onClick, onDismiss } = useModal();
   return (
      <TextAndAppletSlide
         AppletComponent={Applet00801Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title="Nets of a Triangular Pyramid (Tetrahedron)"
      >
         <Modal
            isOpen={isModalOpen}
            title={"What is a Triangular Pyramid (Tetrahedron)?"}
            content={modalContent}
            onDismiss={onDismiss}
            color={colors.WHITE}
            bg="DARK"
         />
         <Paragraph>
            When a{" "}
            <ModalTriggerText onClick={() => onClick(0)}>
               triangular pyramid
            </ModalTriggerText>{" "}
            is unfolded, we get its two-dimensional net plan of four specially
            arranged triangular faces.
         </Paragraph>
         <Paragraph>
            Try unfolding the given triangular pyramid and observe its possible
            nets.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide9;
