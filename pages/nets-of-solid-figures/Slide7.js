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
// import { Applet04505Ge } from "@assessed/byjus-us-math-applets/045_05_GE";
import { colors } from "utils/colors";
const slide_7_pop = "assets/nets-of-solid-figures/15.svg";

const Slide7 = ({ downIcon, currentPageIdx }) => {
   const modalContent = (
      <Flex direction="column" key={0}>
         <Paragraph color={colors.WHITE}>
            A triangular prism is a polyhedron made of three identical
            rectangular faces connecting two parallel and identical triangular
            faces.
         </Paragraph>
         <ModalImg src={slide_7_pop} alt="Image of a triangular prism" />
      </Flex>
   );
   const { isModalOpen, onClick, onDismiss } = useModal();
   return (
      <TextAndAppletSlide
         // AppletComponent={Applet04505Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title="Nets of a Triangular Prism"
      >
         <Modal
            isOpen={isModalOpen}
            title={"What is a Triangular prism?"}
            content={modalContent}
            onDismiss={onDismiss}
            color={colors.WHITE}
            bg="DARK"
         />
         <Paragraph>
            When a{" "}
            <ModalTriggerText onClick={() => onClick(0)}>
               triangular prism
            </ModalTriggerText>{" "}
            is unfolded, we get its two-dimensional net plan of specially
            arranged 2 triangular faces and 3 rectangular faces.
         </Paragraph>
         <Paragraph>
            Try unfolding the given triangular prism and observe its possible
            nets.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
