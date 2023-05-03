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

export const PARAM_TYPES = {
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
         <ModalTriggerText
            color={theme === "LIGHT" ? colors.BLACK : colors.WHITE}
            onClick={() => onClick(idx)}
         >
            {value}
         </ModalTriggerText>
      );
   }
   if (type.includes(PARAM_TYPES.MATH)) {
      return <MathElement htmlString={value} />;
   }
   return null;
};

export default TextParamComponent;
