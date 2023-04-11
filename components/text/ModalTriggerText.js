import React from "react";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { onModalTriggerTextClick } from "utils/analytics";

const ModalTriggerText = ({
   children,
   onClick,
   color,
   fontWeight,
   fontSize,
}) => {
   const onTextClick = () => {
      onClick();
      onModalTriggerTextClick(children);
   };
   return (
      <TextSpan
         color={color || "inherit"}
         fontWeight={fontWeight || fontWeights.BOLD}
         textDecoration="underline"
         cursor="pointer"
         onClick={onTextClick}
         fontSize={fontSize || fontSizes.MEDIUM}
      >
         {children}
      </TextSpan>
   );
};

export default ModalTriggerText;
