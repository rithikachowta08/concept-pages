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
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
import { ModalTriggerText, TextLine } from "components/text";
const cylinder = "assets/surface-area-of-sphere/cylinder.svg";
import { lineHeightProp } from "utils/fontStyles";
import { colors } from "utils/colors";

const Slide10 = ({ downIcon, currentPageIdx }) => {
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Volume}`, "", ""],
         rhsLatex: [
            {
               eqLatex: "A \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi r^2 \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi r^2 h",
               hint: "",
            },
         ],
      },
   ];
   return (
      <TextAndAppletSlide
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Lateral-surface-area_v8/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         secondaryTitle="Volume of different types of cylinders"
         title="Right Circular Cylinder and Oblique Cylinder"
      >
         <Paragraph>
            <TextLine>Volume of right circular cylinder =</TextLine>
            <TextLine>Volume of oblique cylinder = πr2h</TextLine>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide10;
