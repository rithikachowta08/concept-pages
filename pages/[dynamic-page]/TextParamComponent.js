import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);

const TextParamComponent = ({ type, values, onHover, onHoverOut, onClick }) => {
   if (type.includes("DiagramInteraction")) {
      return (
         <>
            &nbsp;
            <TextSpanBg
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               {values[type]}
            </TextSpanBg>
            &nbsp;
         </>
      );
   }
   if (type.includes("ModalTrigger")) {
      return (
         <>
            &nbsp;
            <ModalTriggerText onClick={onClick}>
               {values[type]}
            </ModalTriggerText>
            &nbsp;
         </>
      );
   }
   return null;
};

export default TextParamComponent;
