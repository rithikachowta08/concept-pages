import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const MathElement = dynamic(() => import("components/MathElement"));

const PARAM_TYPES = {
   MODAL_TRIGGER: "ModalTrigger",
   DIAGRAM_INTERACTION: "DiagramInteraction",
   MATH: "Math",
};

const TextParamComponent = ({
   type,
   values,
   theme,
   idx,
   onHover,
   onHoverOut,
   onClick,
}) => {
   if (type.includes(PARAM_TYPES.DIAGRAM_INTERACTION)) {
      return (
         <>
            &nbsp;
            <TextSpanBg
               onHover={() => onHover(idx)}
               onHoverOut={onHoverOut}
               hoverColor={
                  theme === "LIGHT" ? colors.DARK_LAVENDER : colors.LAVENDER
               }
            >
               {values[type]}
            </TextSpanBg>
            &nbsp;
         </>
      );
   }
   if (type.includes(PARAM_TYPES.MODAL_TRIGGER)) {
      return (
         <>
            &nbsp;
            <ModalTriggerText
               color={theme === "LIGHT" ? colors.BLACK : colors.WHITE}
               onClick={onClick}
            >
               {values[type]}
            </ModalTriggerText>
            &nbsp;
         </>
      );
   }
   if (type.includes(PARAM_TYPES.MATH)) {
      return (
         <>
            &nbsp;
            <MathElement htmlString={values[type]} />
            &nbsp;
         </>
      );
   }
   return null;
};

export default TextParamComponent;
