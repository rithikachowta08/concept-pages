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
import { Applet04503Ge } from "@assessed/byjus-us-math-applets/045_03_GE";
import { colors } from "utils/colors";
const slide_5_pop = "assets/nets-of-solid-figures/11.svg";

const Slide5 = ({ downIcon, currentPageIdx }) => {
   const modalContent = (
      <Flex direction="column" key={0}>
         <Paragraph color={colors.WHITE}>
            A cube is a three-dimensional shape that has 6 square faces, 8
            vertices, and 12 edges of equal length.
         </Paragraph>
         <ModalImg src={slide_5_pop} alt="image of a cube" />
      </Flex>
   );
   const { isModalOpen, onClick, onDismiss } = useModal();
   return (
      <TextAndAppletSlide
         AppletComponent={Applet04503Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title="Net of a Cube"
         fullScreenRightOffset="20px"
      >
         <Modal
            isOpen={isModalOpen}
            title={"What is a Cube?"}
            content={modalContent}
            onDismiss={onDismiss}
            color={colors.WHITE}
            bg="DARK"
         />
         <Paragraph>
            When a{" "}
            <ModalTriggerText onClick={() => onClick(0)}>cube</ModalTriggerText>{" "}
            is unfolded, we get its two-dimensional net plan of six specially
            arranged squares. There are 11 possible nets of a cube.
         </Paragraph>
         <Paragraph>
            Try unfolding the given cube and observe its possible nets.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
