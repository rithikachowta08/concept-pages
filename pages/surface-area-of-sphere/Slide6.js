import { useState } from "react";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
import { ModalTriggerText, TextLine } from "components/text";
const cylinder = "assets/surface-area-of-sphere/cylinder.svg";
import { colors } from "utils/colors";

const Slide6 = ({ downIcon, currentPageIdx }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            The curved surface area (CSA) of a cylinder is the area covered by
            its curved surface.
         </Paragraph>
         <Paragraph>
            <TextLine>CSA = 2 &times; π &times; r &times; h </TextLine>
         </Paragraph>
         <ModalImg
            src={cylinder}
            alt="Diagram of a curved surface area of a cylinder"
         />
      </Flex>
   );
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   return (
      <TextAndAppletSlide
         appletSrc="https://www.geogebra.org/m/p4jd88uu"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         bg="DARK"
         secondaryTitle="Sphere"
         title={
            <div>Why is the surface area 4 &times; π &times; r&sup2; ?</div>
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="CSA of Cylinder"
            content={modalContent}
            onDismiss={onDismiss}
            bg="LIGHT"
            color={colors.BLACK}
         />
         <Paragraph color="white" textAlign="left">
            According to Archimedes, the surface area of a sphere is equal to
            the{" "}
            <ModalTriggerText onClick={onClick} color={colors.WHITE}>
               curved surface area of the cylinder
            </ModalTriggerText>{" "}
            when,
         </Paragraph>
         <Paragraph color="white">
            <ul>
               <li>
                  the radius of the cylinder is equal to the radius of the
                  sphere, and
               </li>
               <li>
                  the height of the cylinder is equal to the diameter of the
                  sphere.
               </li>
            </ul>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide6;
