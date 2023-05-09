import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { colorSchemes } from "./colorScheme";
import { SLATE_CONTENT_TYPES } from "utils/constants";
import { TextSpan } from "components/text";
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
   color,
   colorTheme,
   idx,
   onHover,
   onHoverOut,
   onClick,
}) => {
   switch (type) {
      case SLATE_CONTENT_TYPES.TEXT_LINE:
         return <TextSpan color={color}>{value}</TextSpan>;

      case SLATE_CONTENT_TYPES.IMAGE_LINK:
         return (
            <TextSpanBg
               hoverColor={
                  theme === "LIGHT"
                     ? colorSchemes[colorTheme].DARK
                     : colorSchemes[colorTheme].LIGHT
               }
               onHover={() => {
                  onHover(idx);
               }}
               onHoverOut={onHoverOut}
            >
               {value}
            </TextSpanBg>
         );

      case SLATE_CONTENT_TYPES.MODAL_TRIGGER:
         return <ModalTriggerText onClick={onClick}>{value}</ModalTriggerText>;

      case SLATE_CONTENT_TYPES.MATH_EXPRESSION:
         return <MathElement htmlString={value} />;

      case SLATE_CONTENT_TYPES.IMAGE_LINK_WITH_MATH:
         return (
            <TextSpanBg
               hoverColor={
                  theme === "LIGHT"
                     ? colorSchemes[colorTheme].DARK
                     : colorSchemes[colorTheme].LIGHT
               }
               onHover={() => {
                  console.log("hovered");
                  onHover(idx);
               }}
               onHoverOut={onHoverOut}
            >
               <MathElement htmlString={value} />;
            </TextSpanBg>
         );

      default:
         return null;
   }

   // old content
   // if (type.includes(PARAM_TYPES.MATH_WITH_DIAGRAM_INTERACTION)) {
   //    return (
   //       <TextSpanBg
   //          onHover={() => onHover(idx)}
   //          onHoverOut={onHoverOut}
   //          hoverColor={
   //             theme === "LIGHT"
   //                ? colorSchemes[colorTheme].DARK
   //                : colorSchemes[colorTheme].LIGHT
   //          }
   //       >
   //          <MathElement htmlString={value} />
   //       </TextSpanBg>
   //    );
   // }
   // if (type.includes(PARAM_TYPES.DIAGRAM_INTERACTION)) {
   //    return (
   //       <TextSpanBg
   //          onHover={() => onHover(idx)}
   //          onHoverOut={onHoverOut}
   //          hoverColor={
   //             theme === "LIGHT"
   //                ? colorSchemes[colorTheme].DARK
   //                : colorSchemes[colorTheme].LIGHT
   //          }
   //       >
   //          {value}
   //       </TextSpanBg>
   //    );
   // }
   // if (type.includes(PARAM_TYPES.MODAL_TRIGGER)) {
   //    return (
   //       <ModalTriggerText
   //          color={theme === "LIGHT" ? colors.BLACK : colors.WHITE}
   //          onClick={onClick}
   //       >
   //          {value}
   //       </ModalTriggerText>
   //    );
   // }
   // if (type.includes(PARAM_TYPES.MATH)) {
   //    return <MathElement htmlString={value} />;
   // }
   // return null;
};

export default TextParamComponent;
