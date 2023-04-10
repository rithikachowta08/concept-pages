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
const slide_6_pop = "assets/nets-of-solid-figures/13.svg";

const Slide6 = ({ downIcon, currentPageIdx }) => {
   const modalContent = (
      <Flex direction="column" key={0}>
         <Paragraph color={colors.WHITE}>
            A rectangular prism is a three-dimensional solid shape that has 6
            faces, 8 vertices, and 12 edges.
         </Paragraph>
         <ModalImg src={slide_6_pop} alt="Image of a rectangular prism" />
      </Flex>
   );
   const { isModalOpen, onClick, onDismiss } = useModal();
   return (
      <TextAndAppletSlide
         AppletComponent={Applet00801Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title="Nets of a Rectangular Prism"
      >
         <Modal
            isOpen={isModalOpen}
            title={"What is a Rectangular prism?"}
            content={modalContent}
            onDismiss={onDismiss}
            color={colors.WHITE}
            bg="DARK"
         />
         <Paragraph>
            When a{" "}
            <ModalTriggerText onClick={() => onClick(0)}>
               rectangular prism
            </ModalTriggerText>{" "}
            is unfolded, we get its two-dimensional net plan of six specially
            arranged rectangles.
         </Paragraph>
         <Paragraph>
            Try unfolding the given rectangular prism and observe its possible
            nets.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide6;
