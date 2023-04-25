import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { colorSchemes } from "./colorScheme";
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
   MATH_WITH_DIAGRAM_INTERACTION: "di_ma",
};

const TextParamComponent = ({
   type,
   value,
   theme,
   colorTheme,
   idx,
   onHover,
   onHoverOut,
   onClick,
}) => {
   if (type.includes(PARAM_TYPES.MATH_WITH_DIAGRAM_INTERACTION)) {
      return (
         <>
            &nbsp;
            <TextSpanBg
               onHover={() => onHover(idx)}
               onHoverOut={onHoverOut}
               hoverColor={
                  theme === "LIGHT"
                     ? colorSchemes[colorTheme].DARK
                     : colorSchemes[colorTheme].LIGHT
               }
            >
               <MathElement htmlString={value} />
            </TextSpanBg>
            &nbsp;
         </>
      );
   }
   if (type.includes(PARAM_TYPES.DIAGRAM_INTERACTION)) {
      return (
         <TextSpanBg
            onHover={() => onHover(idx)}
            onHoverOut={onHoverOut}
            hoverColor={
               theme === "LIGHT"
                  ? colorSchemes[colorTheme].DARK
                  : colorSchemes[colorTheme].LIGHT
            }
         >
            {value}
         </TextSpanBg>
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
