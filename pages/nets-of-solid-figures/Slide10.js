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
import { Applet04507Ge } from "@assessed/byjus-us-math-applets/045_07_GE";
import { colors } from "utils/colors";
const slide_5_pop = "assets/nets-of-solid-figures/22.svg";

const Slide10 = ({ downIcon, currentPageIdx }) => {
   const modalContent = (
      <Flex direction="column" key={0}>
         <Paragraph color={colors.WHITE}>
            A square pyramid consists of a square-shaped base and 4 triangular
            faces.
         </Paragraph>
         <ModalImg src={slide_5_pop} alt="Image of a square pyramid" />
      </Flex>
   );
   const { isModalOpen, onClick, onDismiss } = useModal();
   return (
      <TextAndAppletSlide
         AppletComponent={Applet04507Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title="Nets of a Square Pyramid"
         fullScreenRightOffset="20px"
      >
         <Modal
            isOpen={isModalOpen}
            title={"What is a Square Pyramid?"}
            content={modalContent}
            onDismiss={onDismiss}
            color={colors.WHITE}
            bg="DARK"
         />
         <Paragraph>
            When a{" "}
            <ModalTriggerText onClick={() => onClick(0)}>
               square pyramid
            </ModalTriggerText>{" "}
            is unfolded, we get its two-dimensional net plan of specially
            arranged 3 triangular faces and 1 square face.
         </Paragraph>
         <Paragraph>
            Try unfolding the given square pyramid and observe its possible
            nets.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide10;
