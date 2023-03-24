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
   MODAL_TRIGGER: "mt",
   DIAGRAM_INTERACTION: "di",
   MATH: "ma",
};

const TextParamComponent = ({
   type,
   value,
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
               {value}
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
               {value}
            </ModalTriggerText>
            &nbsp;
         </>
      );
   }
   if (type.includes(PARAM_TYPES.MATH)) {
      return (
         <>
            &nbsp;
            <MathElement htmlString={value} />
            &nbsp;
         </>
      );
   }
   return null;
};

export default TextParamComponent;
