import dynamic from "next/dynamic";
import useModal from "hooks/useModal";
import { Applet04201Ge } from "@assessed/byjus-us-math-applets/042_01_GE";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const Modal = dynamic(() => import("components/layout/Modal"));

const i1 = "assets/volume-of-composite-solids/30.svg";

const Slide2 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            The three-dimensional solids or objects in geometry are solid
            figures that have three dimensions, length (l), width (w), and
            height (h).
         </Paragraph>
         <ModalImg
            src={i1}
            alt="Diagram of a rectangular prism with length l, width w and height h."
         />
      </Flex>
   );
   return (
      <TextAndAppletSlide
         title="What are composite solids?"
         downIcon={downIcon}
         AppletComponent={Applet04201Ge}
         fullScreenRightOffset="30px"
      >
         <Paragraph>
            A composite solid is a solid formed by combining two or more{" "}
            <ModalTriggerText onClick={onClick}>
               three-dimensional solids
            </ModalTriggerText>
            .
         </Paragraph>
         <Modal
            isOpen={isModalOpen}
            title="Three-Dimensional solids"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndAppletSlide>
   );
};

export default Slide2;
